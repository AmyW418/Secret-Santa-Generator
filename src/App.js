import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import GroupPage from "./pages/GroupPage.js";
import CharityPage from "./pages/CharityPage.js";

function Welcome() {
  return(
    <div className="App">
      <h1 className="Title">Secret Santa Generator</h1>
      <p className="Description">
        Happy Holidays!
        <br></br>
        We know how much everyone loves giving and recieving gifts, and we know how hard
        it may be to pick out of a hat for secret santa. With this, all you have to do
        is enter the names, emails, and wishlists of everyone in your group and we will
        email you who you get. 
        <br></br> 
        <br></br>
        If you're feeling extra giving, feel free to visit our charity page!
      </p>
      <div>
        <Link to="/group"><button className="CreateGroup"><span>Create Group</span></button></Link>  
        <Link to="/charity"><button className="Charity"><span>Charity!</span></button></Link> 
      </div>
           
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/group" exact component={GroupPage} />
        <Route path="/charity" exact component={CharityPage} />
      </Switch>
    </Router>
  );
}

export default App;
