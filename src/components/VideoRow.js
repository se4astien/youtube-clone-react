import React from 'react';
import '../css/VideoRow.css';

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
  title,
}) => {
  return (
    <div className='video-row'>
      <img src={image} alt={title} />
      <div className='video-row_text'>
        <h3>{title}</h3>
        <p className='video-row_headline'>
          {channel} - <span>{subs}</span> subscribers <span>{views}</span> views
          - {timestamp}
        </p>
        <p className='video-row_description'>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
