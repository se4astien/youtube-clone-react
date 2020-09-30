import React from 'react';
import '../css/RecommendedVideos.css';
import VideoCard from './VideoCard';

import faker from 'faker';

const RecommendedVideos = () => {
  return (
    <div className='recommended-videos'>
      <h2>Recommended videos</h2>
      <div className='recommended-videos_videos'>
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
        <VideoCard
          title={faker.internet.userName()}
          views={faker.random.number()}
          timestamp='5 min ago'
          channelImage={faker.image.image()}
          channel={faker.internet.userName()}
          image={faker.image.image()}
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
