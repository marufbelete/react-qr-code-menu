import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup';
import Report from './pages/report'
import PageNotFound from './pages/notfoundpage';
import Menu from './pages/menu';
import {useSelector,useDispatch} from 'react-redux'
import {useCookies} from 'react-cookie';
import {loginActions} from './store/login-slice'
import Counter from './pages/countanimation';

function App() {
  const dispatch=useDispatch()
  const [cookies,setCookie,removeCookie]=useCookies(['token']);
  if(cookies.token)dispatch(loginActions.isLoged(true))
  const authState=useSelector(state=>state.login.isAuthenticated)
  // console.log(authState)
  return (
    <>
    <Switch>
    <Route exact path="/">
      <Redirect to="/menu"></Redirect>
    </Route>
    <Route exact path="/login"><Login/></Route>
    <Route exact path="/menu"> {!authState?<Redirect to="/login"></Redirect>:<Menu/>}</Route>
    <Route exact path="/signup"><SignUp/></Route>
    <Route exact path="/report"><Report/></Route>
    <Route exact path="/counter"><Counter/></Route>
    <Route path="*">
      <PageNotFound/>
    </Route>
    

    </Switch>
    </>
  );
}

export default App;
