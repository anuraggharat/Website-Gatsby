import React from 'react'
import coding from "../../images/coding.png"
export default function InfoBlock({heading,details}) {
    return (
        <div className="container-fluid row pb-5 ">
            <div className="col-sm-6 no-mar pt-5 pl-5"
                            data-sal="slide-right"
                            data-sal-delay="500"
                            data-sal-easing="ease">
              <div className="mt-5 text-black bold">
              <h1>Get career ready with courses specially designed with Industry approach.</h1>
              </div>
              <div className="mt-4 lead">
              At LearnToCode.com , we try to bring latest courses to students so that they can stand out in crowd. Not only that we provide a dedicated team to answer your questions.
             
              </div>  
            </div>
            <div className="col-sm-6 bg-white no-mar pt-5"
            >  
                <img src={coding} className="w-100" 
                data-sal="slide-left"
                data-sal-delay="700"
                data-sal-easing="ease"/>
            </div>

        </div>
    )
}
