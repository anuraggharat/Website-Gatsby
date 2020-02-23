import React, { Component } from 'react'
import certification from "../../images/certification.png"
export default class Certification extends Component {
    render() {
        return (
            <div className="container-fluid bg-light pt-3">
                <div className="row">
                    <div className="col-sm-5 pt-5 pl-5">
                        <h2 className="heading font-weight-bold ml-3 mb-1">Competitive Coding Tests are out now!</h2>
                        <h4 className="ml-3 mt-5">Join now and become a Certified Devloper!</h4>
                        <p className="ml-3">Solve all the problem statements alloted using any language and grab a <span className="lead">CERTIFICATE</span> for it!</p>
                        <div className="container-fluid text-center"><button className="btn btn-success px-5 py-3">Start Coding?</button></div>
                        
                    </div>
                    <div className="col-sm-7"><img src={certification} className="w-100"></img></div>
                </div>
                
            </div>
        )
    }
}
