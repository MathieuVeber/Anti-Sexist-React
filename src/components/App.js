// React
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

// Styles
import '../styles/App.css';

// Components
import Navigation from './Navigation';
import ContentHome from './ContentHome';
import ContentReport from './ContentReport';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Route path='/' component={Navigation} />
        </nav>
        <section className="content" style={{"marginTop": "80px"}}>
          <Switch>
            <Route path='/' exact component={ContentHome}/>
            <Route path='/moderation' component={ContentReport}/>
            <Route path='/gestion-labels' component={ContentLabels}/>
            <Route path='/connexion' component={UserLogin}/>
            <Route path='/inscription' component={UserRegister}/>
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;