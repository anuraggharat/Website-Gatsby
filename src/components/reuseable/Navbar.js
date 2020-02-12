import React, { Component } from 'react';
import { Link } from "gatsby";
import { FaShoppingCart} from "react-icons/fa";

export default class Navbar extends Component {
    
  state={
    menus:[{
      id:1,
      name:"home",
      url:"/",
    },{
      id:1,
      name:"about",
      url:"/",
    },{
      id:3,
      name:"contact",
      url:"/",}
    ]
  }

  render() {
        return (
        <nav className="navbar navbar-expand-sm navbar-inverse bg-transparent">
          <div className="container-fluid">
            <div className="navbar-header">

              <Link to="/" className="navbar-brand">Website name</Link>
              <button type="button" className="navbar-toggler show ml-auto justify-content-right" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon text-dark border"></span>
              </button>
              
            </div>
            <div className="collapse navbar-collapse navbar-right show" id="myNavbar">
              <ul className="nav navbar-nav ml-auto primarytextcolor">
              {this.state.menus.map(menu=>{
                return(
                <li className="active mr-4 capitalize" id="{menu.id}"><Link className="nav-link primarytextcolor" to="{menu.url}">{menu.name}</Link></li>
                )

              })}
                <li className="active"><Link className="nav-link"><FaShoppingCart className="cart-icon"></FaShoppingCart></Link></li>
              </ul>

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
