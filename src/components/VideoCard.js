import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({
  image,
  title,
  channel,
  channelImage,
  views,
  timestamp,
}) => {
  return (
    <div className='video-card'>
      <img src={image} alt={title} />
      <div className='video-card_info'>
        <Avatar
          className='video-card_avatar'
          alt={channel}
          src={channelImage}
        />
        <div className='video-card_text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views + timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
