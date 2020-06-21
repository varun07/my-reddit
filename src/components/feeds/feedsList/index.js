import React from 'react';
import FeedItem from '../feedItem/container';
import FeedHeader from '../header';
import NavButtons from '../navButtons';
import VoteCountChart from '../voteCountChart/container';
import Shimmer from '../../../common/components/shimmer';
import Loader from '../../../common/components/loader';
import ErrorScreen from '../../../common/components/errorScreen';
import './styles.scss';

export default class FeedsList extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      showShimmer: true,
      showLoader: false
    }
  }
  componentDidMount() {
    const { fetchFeeds, pagination } = this.props;
    fetchFeeds(pagination.currentPage, pagination.pageSize)
      .finally(() => {
        this.setState({ showShimmer: false });
      });
  }

  prevBtnClick = () => {
    const { fetchFeeds, pagination } = this.props;
    this.setState({ showLoader: true });
    fetchFeeds(pagination.currentPage - 1, pagination.pageSize).finally(() => this.setState({ showLoader: false }));
  }

  nextBtnClick = () => {
    const { fetchFeeds, pagination } = this.props;
    this.setState({ showLoader: true });
    fetchFeeds(pagination.currentPage + 1, pagination.pageSize).finally(() => this.setState({ showLoader: false }));
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