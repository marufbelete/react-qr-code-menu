import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup';
import PageNotFound from './pages/notfoundpage';
import Menu from './pages/menu';
import {useSelector} from 'react-redux'
import {useCookies} from 'react-cookie';


function App() {
  const [cookies,setCookie,removeCookie]=useCookies(['token']);
  // const authState=useSelector(state=>state.login.isAuthenticated)
  // console.log(authState)
  return (
    <>
    <Switch>
    <Route exact path="/">
      <Redirect to="/menu"></Redirect>
    </Route>
    {/* <Route exact path="/menu"><Menu/></Route> */}
    <Route exact path="/login"><Login/></Route>
    <Route exact path="/menu"> {!cookies.token?<Redirect to="/login"></Redirect>:<Menu/>}</Route>
    <Route exact path="/signup"><SignUp/></Route>
    <Route path="*">
      <PageNotFound/>
    </Route>
    </Switch>
    </>
  );
}

export default App;
