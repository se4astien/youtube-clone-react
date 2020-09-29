import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';

function App() {
  return (
    <div className='container'>
      <Header />
      <Sidebar />
      <RecommendedVideos />
    </div>
  );
}

export default App;
