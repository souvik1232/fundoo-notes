import logo from './logo.svg';
import './App.scss';
import Login from '../src/components/login/login';
import {BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Forgot from './components/forgotpassword/forgotpassword';
import Register from './components/register/register';
import Reset from './components/reset/reset';
import dashboard from './components/dashboard/dashboard';
import getNote from './components/getNote/getNote1';
import gettrashNote from './components/trash/gettrash';
import getarchiveNote from './components/archive/getarchive';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Switch> */}
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={Forgot} />
            <Route path="/register" component={Register}/>
            <Route path="/resetpassword/:token" component={Reset}/>
            <Route path="/dashboard" component={dashboard}/>
            <Route path="/dashboard/notes" component={getNote}/>
            <Route path="/dashboard/trash" component={gettrashNote}/>
            <Route path="/dashboard/archive" component={getarchiveNote}/>
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
