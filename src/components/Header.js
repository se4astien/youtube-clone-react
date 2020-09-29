import React from 'react';
import '../css/Header.css';
import faker from 'faker';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-menu'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className='logo'
          src='https://pngimg.com/uploads/youtube/youtube_PNG13.png'
          alt='YouTube Logo'
        />
      </div>

      <div className='header-form'>
        <input type='text' />
        <button>
          <SearchIcon />
        </button>
      </div>

      <div className='header-icons'>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar className='image' alt='avatar' src={faker.image.avatar()} />
      </div>
    </div>
  );
};

export default Header;
