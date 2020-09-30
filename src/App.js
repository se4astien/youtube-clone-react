import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import RecommendedVideos from './components/RecommendedVideos';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <div className='content'>
          <Sidebar />
          <Switch>
            <Route path='/search/:searchTerm'>
              <SearchPage />
            </Route>
            <Route path='/'>
              <RecommendedVideos />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
