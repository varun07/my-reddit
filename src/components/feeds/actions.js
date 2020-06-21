import { UPDATE_FEEDS_LIST, UPDATE_FEEDS_PAGINATION, FEED_FETCH_ERROR } from "./actionTypes";
import { batchActions } from "redux-batched-actions";
import axios from "axios";
import UpvoteManager from "./utils/upvoteManager";
import FeedHiddenManager from "./utils/hideFeedsManager";


export function fetchFeeds(pageNumber, pageSize = 50) {
  return (dispatch) => {
    return axios.get(`https://hn.algolia.com/api/v1/search?tags=story&page=${pageNumber}&hitsPerPage=${pageSize}`)
      .then((feeds) => {

        const feedsToBeDisplayed = [];
        feeds.data.hits.forEach(item => {
          if(!FeedHiddenManager.isFeedHidden(item.objectID)) {
            feedsToBeDisplayed.push({
              ...item,
              points: UpvoteManager.getVotes(item.objectID) + item.points
            })
          }
        });
        dispatch(batchActions([
          {
            type: FEED_FETCH_ERROR,
            show: false
          },
          {
            type: UPDATE_FEEDS_LIST,
            payload: feedsToBeDisplayed
          },
          {
            type: UPDATE_FEEDS_PAGINATION,
            payload: {
              currentPage: feeds.data.page,
              pageSize: pageSize,
              totalPages: feeds.data.nbPages
            }
          }
        ]))
      })
      .catch((e) => {
        console.error(e);
        dispatch({
          type: FEED_FETCH_ERROR,
          show: true
        })
        return Promise.reject();
      });
  }
}

export function markUpvote(feedIndex) {
  return (dispatch, getState) => {
    const newsFeedState = getState().newsFeed;
    const currentFeed = newsFeedState.feedsList[feedIndex];
    const updatedFeed = {
      ...currentFeed,
      points: currentFeed.points + 1
    }

    UpvoteManager.updateVote(currentFeed.objectID, 1);
    const updateList = newsFeedState.feedsList.map((item, index) => index === feedIndex ? updatedFeed: item);
    dispatch({
      type: UPDATE_FEEDS_LIST,
      payload: updateList
    });
  }
}

export function hideFeed(feedIndex) {
  return (dispatch, getState) => {
    const newsFeedState = getState().newsFeed;
    const updateList = newsFeedState.feedsList.filter((item, index) => index !== feedIndex);
    const currentFeed = newsFeedState.feedsList[feedIndex];

    FeedHiddenManager.hideFeed(currentFeed.objectID);
    dispatch({
      type: UPDATE_FEEDS_LIST,
      payload: updateList
    });
  }
}