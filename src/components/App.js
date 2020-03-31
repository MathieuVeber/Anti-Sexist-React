// React
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

// Styles
import '../styles/App.css';

// Components
import Navigation from './Navigation';
import PageHome from './PageHome';
import PageLabel from './PageLabel';
import PageReport from './PageReport';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Confirmation from './Confirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Route path='/' component={Navigation} />
        </nav>
        <section id="content" style={{"paddingTop": "88px"}}>
          <Switch>
            <Route path='/' exact component={PageHome}/>
            <Route path='/categories' component={PageLabel}/>
            <Route path='/moderation' component={PageReport}/>
            <Route path='/gestion-admin' component={PageAdmin}/>
            <Route path='/connexion' component={UserLogin}/>
            <Route path='/inscription' component={UserRegister}/>
          </Switch>
          <Confirmation/>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;