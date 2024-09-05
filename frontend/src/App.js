
import {BrowserRouter as Router ,Route,Switch,Redirect} from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import RegistrationPage from './components/page/RegistrationPage';
import CoursePage from './components/page/CoursePage';
import HomePage from './components/page/HomePage';
import { useSelector } from 'react-redux';
import ProfilePage from './components/page/ProfilePage';
import HealthPage from './components/page/HealthPage';


function App() {
     const isLogin = useSelector((state)=>state.auth.isloggedIn);
  

    return (


     <Router>
        <Switch>
        <Route exact path='/'>
               <HomePage/>
          </Route>
          <Route exact path='/register'>
                <RegistrationPage/>
          </Route>
  
          <Route  path='/login'>
                <LoginPage/>
          </Route>

          <Route exact path='/courses'>
              {isLogin ? <CoursePage/> : <Redirect to='/login'/>}
          </Route>

          <Route exact path='/profile'>
               {isLogin ? <ProfilePage/> : <Redirect to='/login'/>}     
          </Route>

          <Route exact path='/health'>
               {isLogin ? <HealthPage/> : <Redirect to='/login'/>}      
          </Route>
        
           <Route path='*'>
              <Redirect to={isLogin ? '/courses' : '/login'} />
            </Route>
          
        </Switch>
     </Router>
  );
}

export default App;
