import React, { Component } from 'react';
import { Link } from "gatsby";

export default class Navbar extends Component {
    
  // constructor(){
  //   state={
  //     navbarToggle:false
  //     navbarClass:
  //   }
  // }

  render() {
        return (
<nav className="navbar navbar-expand-sm navbar-inverse bg-transparent">
  <div className="container-fluid">
    <div className="navbar-header">

      <Link to="/" className="navbar-brand">Website name</Link>
    </div>
    <div className="collapse navbar-collapse navbar-right" id="myNavbar">
      <ul className="nav navbar-nav ml-auto">
        <li className="active"><Link className="nav-link">Home</Link></li>
        <li className="active"><Link className="nav-link">Shop</Link></li>
        <li className="active"><Link className="nav-link">About</Link></li>
      </ul>
      <button type="button" className="navbar-toggler text-dark" data-toggle="collapse" data-target="#myNavbar">
        {/* <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span> 
                                */}
                                Menu
      </button>
      {/* <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul> */}
    </div>
  </div>
</nav>


        )
    }
}
