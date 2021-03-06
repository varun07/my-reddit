import {connect} from 'react-redux';
import FeedItem from './index';
import { bindActionCreators } from 'redux';
import { markUpvote, hideFeed } from '../actions';

function mapStateToProps(state, props) {
  return state.newsFeed.feedsList && state.newsFeed.feedsList.length > 0 ? state.newsFeed.feedsList[props.index] : {};
}

function mapDispatchToProps() {
  return dispatch => bindActionCreators({
    markUpvote,
    hideFeed
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);
