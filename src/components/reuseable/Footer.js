import React, { Component } from 'react'
import { Link } from "gatsby"
import logo from "../../images/gatsby-icon.png"
export default class Footer extends Component {
    render() {
        return (
                <footer className="container-fluid no-pad no-mar bg-secondary">
                    <div className="container-fluid no-pad no-mar">
                        <div className="row no-pad no-mar ">
                            <div className="col-md-4 text-center pt-5 text-white pb-5">
                                <img className="footer-logo" src={logo} width="50px" height="50px"></img>
                                <h4 className="text-white mt-2">LTO Institution Pvt.Ltd .</h4>
                                <p>Coding made easy.</p>
                                <div className="container-fluid text-left pl-5" >
                                <p className="mt-0 mb-0 ml-4">201 Skyparidise,Nerul,Navi-Mumbai.</p>
                                <p className="mt-0 mb-0 ml-4">Contact: 9876543321</p>
                                <p className="mt-0 mb-0 ml-4">Email: ltoinstitution@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-4 pt-5">
                                <ul className="list">
                                    <li className="pt-0"><h2>Some Helpful Links</h2></li>
                                    <li className="mt-4"><Link className="footer-link">Documentation</Link></li>
                                    <li className="mt-3"><Link className="footer-link">Terms and Conditions</Link></li>
                                    <li className="mt-3"><Link className="footer-link">Start Teaching with us?</Link></li>
                                    <li className="mt-3"><Link className="footer-link">Subscribe us!</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="container-fluid credits text-center pt-5 pb-2 bg-dark"> 
                        <p className="text-white">
                            Devloped by <Link>Anurag_Gharat</Link> . All rights reserved 2020&copy;
                        </p>
                    </div>
                </footer>
        )
    }
}
