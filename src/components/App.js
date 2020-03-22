import React from 'react';
import '../App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import PostList from './PostList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Navigation} />
        <Switch>
          <Route path='/' exact component={PostList}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
