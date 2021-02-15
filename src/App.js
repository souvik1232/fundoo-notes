import logo from './logo.svg';
import './App.scss';
import Login from '../src/components/login/login';
import {BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Forgot from './components/forgotpassword/forgotpassword';
import Register from './components/register/register';
import Reset from './components/reset/reset';
import dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={Forgot} />
            <Route path="/register" component={Register}/>
            <Route path="/resetpassword/:token" component={Reset}/>
            <Route path="/dashboard" component={dashboard}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
