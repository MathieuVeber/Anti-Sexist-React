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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Route path='/' component={Navigation} />
        </nav>
        <section className="content" style={{"paddingTop": "88px"}}>
          <Switch>
            <Route path='/' exact component={PageHome}/>
            <Route path='/moderation' component={PageReport}/>
            <Route path='/gestion-labels' component={PageLabel}/>
            <Route path='/connexion' component={UserLogin}/>
            <Route path='/inscription' component={UserRegister}/>
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;