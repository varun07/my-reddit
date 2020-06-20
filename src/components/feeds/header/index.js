import React from 'react';
import './styles.scss';

export default function FeedHeader() {
  return (
    <div className="feed-item--header table-row table-header">
      <div className="table-col-header table-col table-col-1">Comments</div>
      <div className="table-col-header table-col table-col-1">Vote Count</div>
      <div className="table-col-header table-col table-col-1">Upvote</div>
      <div className="table-col-header table-col table-col-9 news-detail-header">News Details</div>
    </div>
  )
}