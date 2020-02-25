import React from 'react'
import Heading from '../reuseable/Heading'

export default function aboutpeople() {
    return (
        <div className="container-fluid bg-white">
        <div className="container bg-light mt-5 py-5">
            <div className="main-hero row px-auto bg-light pt-3 pb-3">
                <div className="col-md-6 px-auto text-center rounded"   data-sal="slide-up" data-sal-delay="500"
  data-sal-easing="ease">
                    <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    className="img-circle"
                    />
                </div>
                <div className="col-md-6 pr-5 pt-3">
                    <h2 className="bold">Hey There! Hitesh from Learn To Code.</h2>
                    <p className="lead mt-3">I am the CEO and Chief trainer in Learn To Code.I'll be helping you in this beautiful journey to learn to code.Start your beautiful journey in learning to code with us.We have the best Instructors available for you. Our content creators create the best videos for you student to help you all to learn interactively.</p>
                </div>
            </div>
            <div className="container-fluid justify-content-center text-center mt-5 mb-5">
            <Heading title="Know Your Instructors"/>     
            </div>
          
        <div className="row">
            <div className="col-sm-3">
                <div className="card">
                    <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="card-img-top instructor-img img-rounded"
                    ></img>
                    <div className="card-body">
                        <h2 className="card-title">
                            John Doe
                        </h2>
                        <p className="card-text">
                            Ml and AI Expert
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="card-img-top instructor-img img-rounded"
                    ></img>
                    <div className="card-body">
                        <h2 className="card-title">
                            Kenny Luke
                        </h2>
                        <p className="card-text">
                            Python Expert.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img
                    src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="card-img-top instructor-img img-rounded"
                    ></img>
                    <div className="card-body">
                        <h2 className="card-title">
                            Micheal Jolie
                        </h2>
                        <p className="card-text">
                            Android and Web Dev.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img
                    src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="card-img-top instructor-img img-rounded"
                    ></img>
                    <div className="card-body">
                        <h2 className="card-title">
                            Harris Watson
                        </h2>
                        <p className="card-text">
                            Android And OOP.
                        </p>
                    </div>
                </div>
            </div>
        
        </div>
        </div>
        
        </div>/* end of main container */
    )
}


