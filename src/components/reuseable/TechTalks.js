import React from 'react'
import { FiSend } from "react-icons/fi";
export default function TechTalks() {
    return (
        <div className="container-fluid no-pad no-mar techtalks w-100"
                             
        data-sal="fade"
        data-sal-delay="500"
        data-sal-easing="ease">
            <div className="techtalks-text pt-5">
                <div className="container-fluid float-left w-100 mx-auto text-center">
                    <h2 className="heading mt-3 mb-2 text-uppercase text-white">We would love to visit your university!</h2>
                    <p className="lead mx-5 mt-3">We love to meet students directly at their campus. Students get a lot of knowledge, clear path guide and Boost in life. We get a lot of love in return.</p>
                    <p className="font-weight-bold">Send us an email to invite us at your college!</p>
                    <input className="form-control w-50 mx-auto"></input>
                    <br />
                    <button className="btn btn-outline-dark btn-second px-4 py-2 mt-0">SEND</button>
                </div>
                
            </div>
        </div>
    )
}