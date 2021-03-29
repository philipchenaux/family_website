import React, { Component } from "react";
import Art from './artblakey.jpg'
 
class Music extends Component {
  render() {
    return (
      <div>
        <h2>MUSIC</h2>
        <img src={Art} id="Art"/>
      </div>
    );
  }
}
 
export default Music;