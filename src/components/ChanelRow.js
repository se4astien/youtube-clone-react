import React from 'react';
import '../css/ChannelRow.css';
import { Avatar } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import faker from 'faker';

const ChanelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className='channel-row'>
      <Avatar
        className='channel-row_logo'
        alt='avatar'
        src={faker.image.avatar()}
      />
      <div className='channel-row_text'>
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} subscribers - {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChanelRow;
