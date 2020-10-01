import React from 'react';
import '../css/SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChanelRow from './ChanelRow';
import VideoRow from './VideoRow';
import faker from 'faker';

const SearchPage = () => {
  return (
    <div className='search-page'>
      <div className='search-page_filter'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChanelRow
        image={faker.image.image()}
        channel={faker.finance.accountName()}
        verified
        subs='500K'
        noOfVideos={400}
        description={faker.lorem.paragraph()}
      />
      <hr />
      <VideoRow
        views='5.4M'
        subs='500K'
        description={faker.lorem.paragraph()}
        timestamp='1 minute ago'
        channel={faker.finance.accountName()}
        image={faker.image.image()}
        title={faker.name.title()}
      />
      <VideoRow
        views='5.4M'
        subs='500K'
        description={faker.lorem.paragraph()}
        timestamp='1 minute ago'
        channel={faker.finance.accountName()}
        image={faker.image.image()}
        title={faker.name.title()}
      />
      <VideoRow
        views='5.4M'
        subs='500K'
        description={faker.lorem.paragraph()}
        timestamp='1 minute ago'
        channel={faker.finance.accountName()}
        image={faker.image.image()}
        title={faker.name.title()}
      />
      <VideoRow
        views='5.4M'
        subs='500K'
        description={faker.lorem.paragraph()}
        timestamp='1 minute ago'
        channel={faker.finance.accountName()}
        image={faker.image.image()}
        title={faker.name.title()}
      />
      <VideoRow
        views='5.4M'
        subs='500K'
        description={faker.lorem.paragraph()}
        timestamp='1 minute ago'
        channel={faker.finance.accountName()}
        image={faker.image.image()}
        title={faker.name.title()}
      />
    </div>
  );
};

export default SearchPage;
