import React from 'react';
import '../App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import PostList from './PostList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={PostList} />
        <Switch>
          <Route path='/' exact component={PostList}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
