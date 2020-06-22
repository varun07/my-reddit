import React from 'react';
import { withRouter } from 'react-router-dom';

import FeedItem from '../feedItem/container';
import FeedHeader from '../header';
import NavButtons from '../navButtons';
import VoteCountChart from '../voteCountChart/container';
import Shimmer from '../../../common/components/shimmer';
import Loader from '../../../common/components/loader';
import ErrorScreen from '../../../common/components/errorScreen';
import './styles.scss';

export class FeedsList extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      showShimmer: true,
      showLoader: false
    }
  }
  componentDidMount() {
    const { fetchFeeds, pagination, match, history } = this.props;
    let pageNo = 0;
    if(match.params.id && Number(match.params.id) > 0) {
      pageNo = match.params.id - 1;
    }
    else {
      console.log(history);
      
      history.replace('/page/1');
    }
    fetchFeeds(pageNo, pagination.pageSize)
      .finally(() => {
        this.setState({ showShimmer: false });
      });
  }



  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      if(this.props.match.params.id !== prevProps.match.params.id) {
        this.updateFeeds(this.props.match.params.id);
      }
    }
  }

  updateFeeds = (pageNumber) => {
    const { fetchFeeds, pagination } = this.props;
    this.setState({ showLoader: true });
    fetchFeeds(pageNumber - 1, pagination.pageSize).finally(() => this.setState({ showLoader: false }));
  }

  prevBtnClick = () => {
    const { history, match } = this.props;
    const prevPageNo = Number(match.params.id) - 1;
    history.push(`/page/${prevPageNo}`);
  }

  nextBtnClick = () => {
    const { history, match } = this.props;
    const nextPageNo = Number(match.params.id) + 1;
    const path = `/page/${nextPageNo}`;
    
    history.push(path);
  }

  reloadFeeds = () => {
    const { fetchFeeds, pagination } = this.props;
    this.setState({ showShimmer: true });
    fetchFeeds(pagination.currentPage, pagination.pageSize).finally(() => this.setState({ showShimmer: false }));
  }

  renderFeeds = () => {
    const { feedsList, errorScreen } = this.props;
    const { showShimmer } = this.state;

    if (showShimmer) {
      return <Shimmer />;
    }

    else if (errorScreen) {
      return <ErrorScreen reloadPage={this.reloadFeeds} />;
    }
    else if (feedsList && feedsList.length > 0) {
      return feedsList.map((feed, index) => (
        <FeedItem
          key={feed.objectID} index={index}
        />
      ));
    }
    else {
      return <div className="mt20">No Feeds Available</div>;
    }
  }

  render() {
    const { pagination } = this.props;
    const { showShimmer, showLoader } = this.state;
    return (
      <div className="feeds-page">
        {!!showLoader && <Loader />}
        <div className="feeds-list table-layout">
          <FeedHeader />
          {this.renderFeeds()}
        </div>
        {!showShimmer && (
          <NavButtons
            showPrevBtn={pagination.currentPage > 0}
            showNextBtn={pagination.currentPage < pagination.totalPages - 1}
            onPrevBtnClick={this.prevBtnClick}
            onNextBtnClick={this.nextBtnClick}
          />
        )}
        <div className="votesCharat">
          <VoteCountChart />
        </div>
      </div>
    )
  }
}

export default withRouter(FeedsList);