import React, { Component } from "react";
import gif from './home.gif';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from "./Contact";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO, WELCOME TO OUR FAMILY WEBSITE</h2>
        <p>This website is still under renovation, but if you would like to 
          contact us please visit the <NavLink to="/contact">contact</NavLink> tab.</p>
        <Route path="/contact" component={Contact}/>
        <img src={gif} alt="GIF" id="gif"/>
      </div>
    );
  }
}
 
export default Home;