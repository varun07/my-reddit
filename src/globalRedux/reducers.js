import {combineReducers} from 'redux';

import NewsFeed from '../components/feeds/reducers';

export default combineReducers({
  newsFeed: NewsFeed
});
