// React
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

// Styles
import '../styles/App.css';

// Components
import Navigation from './Navigation';
import ContentHome from './ContentHome';
import ContentSort from './ContentSort';
import ContentReport from './ContentReport';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Navigation} />
        <Switch>
          <Route path='/' exact component={ContentHome}/>
          <Route path='/categorie' component={ContentSort}/>
          <Route path='/moderation' component={ContentReport}/>
          <Route path='/connexion' component={UserLogin}/>
          <Route path='/inscription' component={UserRegister}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;