import React, { Component } from 'react';
import { Link } from "gatsby";
import { FaShoppingCart } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa"

export default class Navbar extends Component {
    
  state={
    menus:[{
      id:1,
      name:"home",
      url:"",
    },{
      id:1,
      name:"about",
      url:"/about",
    },{
      id:3,
      name:"contact",
      url:"/contact",}
      ,{
        id:4,
        name:"courses",
        url:"/courses",}
    ]
  }

  render() {
        return (
        <nav className="navbar navbar-expand-sm navbar-inverse bg-transparent">
          <div className="container-fluid">
            <div className="navbar-header">

              <Link to="/" className="navbar-brand text-white bg-dark px-3 py-2 websitename"><FaLaptopCode className="icon mb-1 mr-2"/>LearnToCode</Link>
              <button type="button" className="navbar-toggler ml-5 float-right" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon text-white border"></span>
              </button>
              
            </div>
            <div className="collapse navbar-collapse navbar-right " id="myNavbar">
              <ul className="nav navbar-nav ml-auto primarytextcolor">
              {this.state.menus.map(menu=>{
                return(
                <li className="active mr-4 capitalize" id="{menu.id}"><Link className="nav-link primarytextcolor" to={menu.url}>{menu.name}</Link></li>
                )

              })}
                <li className="active"><Link className="nav-link"><FaShoppingCart className="cart-icon"></FaShoppingCart></Link></li>
              </ul>

            </div>
          </div>
        </nav>


        )
    }
}
