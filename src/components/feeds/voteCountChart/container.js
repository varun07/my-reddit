import { connect } from "react-redux";
import VoteCountChart from ".";

function mapStateToProps(state) {
  return {
    data: state.newsFeed.feedsList
  };
}

export default connect(mapStateToProps)(VoteCountChart);


