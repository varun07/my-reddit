export default class UpvoteManager {
  static keyName = 'votes';

  static updateVote(id, voteCount) {
    const votes = window.localStorage.getItem[this.keyName];
    if(votes && votes[id]) {
      votes[id] += voteCount;
    }
    else {
      votes[id] = voteCount;
    }
    window.localStorage.setItem(this.keyName, votes)
  }

  static getVotes(id) {
    const votes = window.localStorage.getItem[this.keyName];
    return (votes && votes[id]) || 0;
  }
}