import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Incident from './pages/Incident/Incident';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App"> 
      <Router>           
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>              
        <Route path="/signup" component={Signup}/>              
        <Route path="/incident" component={Incident}/>                      
      </Router>
    </div>
  );
}

export default App;
