import React, { Component } from 'react'
import certification from "../../images/certification.png"
export default class Certification extends Component {
    render() {
        return (
            <div className="container-fluid bg-light pt-3">
                <div className="row">
                    <div className="col-sm-5 pt-5 pl-5">
                        <h2 className="heading text-second font-weight-bold ml-3 mb-1"                        
                        data-sal="slide-right"
                        data-sal-delay="500"
                        data-sal-easing="ease">Competitive Coding Tests are out now!</h2>
                        <h4 className="ml-3 mt-5 text-muted"                        
                        data-sal="slide-right"
                        data-sal-delay="500"
                        data-sal-easing="ease">Join now and become a Certified Devloper!</h4>
                        <p className="ml-3 text-muted"                        
                        data-sal="slide-right"
                        data-sal-delay="500"
                        data-sal-easing="ease">Solve all the problem statements alloted using any language and grab a <span className="lead">CERTIFICATE</span> for it!</p>
                        <div className="container-fluid text-center"                     
                        data-sal="fade"
                        data-sal-delay="1000"
                        data-sal-easing="ease"><button className="btn-first btn-outline-primary btn px-3 py-2">Start Coding?</button></div>
                        
                    </div>
                    <div className="col-sm-7"
                                            data-sal="fade"
                                            data-sal-delay="700"
                                            data-sal-easing="ease"><img src={certification} className="w-100"></img></div>
                </div>
                
            </div>
        )
    }
}
