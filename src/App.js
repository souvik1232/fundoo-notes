import history from './components/history'
import './App.scss';
import Login from '../src/components/login/login';
import {Router, Route } from 'react-router-dom';
import Forgot from './components/forgotpassword/forgotpassword';
import Register from './components/register/register';
import Reset from './components/reset/reset';
import dashboard from './components/dashboard/dashboard';
import getNote from './components/getNote/getNote1';
import gettrashNote from './components/trash/gettrash';
import getarchiveNote from './components/archive/getarchive';
import AuthRoute from './components/authroute/authroute';
import PrivateRoute from './components/privateroute/privateroute';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
            <AuthRoute path="/login" component={Login} />
            <Route path="/forgotpassword" component={Forgot} />
            <Route path="/register" component={Register} exact/>
            <Route path="/resetpassword/:token" component={Reset} />
            <PrivateRoute path="/dashboard" component={dashboard} />
            <PrivateRoute path="/dashboard/notes" component={getNote} />
            <PrivateRoute path="/dashboard/trash" component={gettrashNote} />
            <PrivateRoute path="/dashboard/archive" component={getarchiveNote} />
        </div>
      </Router>
    </div>
  );
}

export default App;
