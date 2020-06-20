import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFeeds } from "../actions";
import FeedList from './index';

function mapStateToProps(state) {
  return state.newsFeed;
}

function mapDispatchToProps() {
  return dispatch => bindActionCreators({
    fetchFeeds
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);