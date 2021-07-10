import { Router, Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LandingPage from './Screens/LandingPage';
import history from './Components/history';
import Header from './Components/Header'
import UserLogin from './Screens/UserLogin'
import AdminLogin from './Screens/AdminLogin'
import UserHome from './Screens/UserHome'
import AdminHome from './Screens/AdminHome'
import UserSignUp from './Screens/UserSignUp';
import LogoutScreen from './Screens/LogoutScreen';
import OneEmployeeSheet from './Components/EmployeeSheet/OneEmployeeSheet';
function App() {
  return (
    <div>
        <Router history={history}>
        <div>
        <Header />
        <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/user/login" exact component={UserLogin} />
        <Route path="/admin/login" exact component={AdminLogin} />
        <Route path="/user/home" exact component={UserHome} />
        <Route path="/admin/home" exact component={AdminHome} />
        <Route path="/register" exact component={UserSignUp} />
        <Route path="/logout" exact component={LogoutScreen} />
        <Route path="/employee/sheet" exact component={OneEmployeeSheet} />
        </Switch>
        </div>
        </Router>
    </div>
)
}

export default App;
