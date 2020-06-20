import React from 'react';
import { relativeTimeInWords } from '../../../utils/datetime';
import './styles.scss';

export default function FeedItem(props) {
  const {
    index,
    url,
    num_comments,
    points,
    title,
    author,
    created_at,
    markUpvote
  } = props;

  return (
    <div className="feed-item table-row">
      <div className="comments-count table-col table-col-1">{num_comments}</div>
      <div className="upVotes-count table-col table-col-1">{points}</div>
      <div className="table-col table-col-1">
        <div onClick={() => markUpvote(index)} className="arrow-up upvoteBtn" title="Click to upvote" />
      </div>
      <div className="news-detail table-col table-col-9">
          <span>{title}</span>
          <span className="feed-source-url txt-small txt-light"><a href={url} target="_blank">({url})</a></span>
          <span className="txt-small txt-light">by</span>
          <span>{author}</span>
          <span className="txt-small txt-light">{relativeTimeInWords(created_at)}</span>
      </div>
    </div>
  )
}