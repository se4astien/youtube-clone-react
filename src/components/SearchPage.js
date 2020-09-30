import React from 'react';
import '../css/SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';

const SearchPage = () => {
  return (
    <div className='search-page'>
      <div className='search-page_filter'>
        <TuneIcon />
      </div>
    </div>
  );
};

export default SearchPage;
