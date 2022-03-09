import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import Signup from './Components/Signup';
import { useContext } from 'react'
import { AuthContext } from "../src/context/AuthContext"

import { Switch, Route} from "react-router-dom";
import CustomerDashbord from './Components/CustomerDashbord';

function App() {
  const { auth } = useContext(AuthContext)

  console.log(auth);
  
  return (
    <div>
      <Header />
      <Switch>
 

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/dashbords'>
      {
         auth.token === "" ?  <SignIn />:  <CustomerDashbord />
      }
      </Route>

      <Route path='/login'>
      {
         auth.token === "" ?  <SignIn />:  <CustomerDashbord />
      }
      </Route>

      <Route path="/register" >
          <Signup />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
