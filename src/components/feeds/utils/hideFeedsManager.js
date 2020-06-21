
export default class FeedHiddenManager {
  static keyName = 'hidden-feeds';

  static hideFeed(id) {
    const store = window.localStorage.getItem(this.keyName);
    let feeds = store ? JSON.parse(store) : {};
    feeds = {
      ...feeds,
      [id]: true
    }
    window.localStorage.setItem(this.keyName, JSON.stringify(feeds));
  }

  static isFeedHidden(id) {
    const feedsStore = window.localStorage.getItem(this.keyName);
    if(feedsStore) {
      let feeds = JSON.parse(feedsStore);
      if(feeds[id]) {
        return true;
      }
    }
    return false;
  }
}