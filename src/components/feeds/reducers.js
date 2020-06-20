import { UPDATE_FEEDS_LIST, UPDATE_FEEDS_PAGINATION, FEED_FETCH_ERROR } from "./actionTypes";

export const NEWS_FEED_REDUCER_DEFAULTS  = {
  feedsList: [],
  pagination: {
    currentPage: 0,
    pageSize: 20,
    totalPages: 0,
  },
  errorScreen: false
}

export default function NewsFeedReducer(state = NEWS_FEED_REDUCER_DEFAULTS, action) {
  switch(action.type) {
    case UPDATE_FEEDS_LIST: 
      return {
        ...state,
        feedsList: action.payload
      }
    case UPDATE_FEEDS_PAGINATION: 
      return {
        ...state,
        pagination: action.payload
      }
    case FEED_FETCH_ERROR:
      return {
        ...state,
        errorScreen: action.payload
      }
    default: 
      return state;
  }
}