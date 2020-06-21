export default class UpvoteManager {
  static keyName = 'votes';

  static updateVote(id, voteCount) {
    const store = window.localStorage.getItem(this.keyName);
    let votes = store ? JSON.parse(store) : {};
    if(votes && votes[id]) {
      votes = {
        ...votes,
        [id]: votes[id] + voteCount
      }
    }
    else {
      votes = {
        ...votes,
        [id]: voteCount
      };
    }
    window.localStorage.setItem(this.keyName, JSON.stringify(votes));
  }

  static getVotes(id) {
    const votesStore = window.localStorage.getItem(this.keyName);
    if(votesStore) {
      let votes = JSON.parse(votesStore);
      if(votes[id]) {
        return votes[id];
      }
    }
    return 0;
  }
}