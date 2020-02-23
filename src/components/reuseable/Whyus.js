import React from 'react'
import Heading from './Heading'
import teacher from "../../images/teacher.png"
import career from "../../images/career.png"
import learning from "../../images/learning.png"
export default function Whyus() {
    return (
        <div className="container-fluid bg-light py-5">
            <Heading title="Why LearnCodeOnline.com? " />
            <div className="d-flex flex-row justify-content-around pt-5">
                <div className="card border-0 w-20 bg-white py-4 pl-4 pr-2 shadow-lg">
                    <img className="card-img-top w-75 mx-auto" src={teacher}></img>
                    <p className="mt-4">Expert Trainers that have worked in the concerned domain for years.</p>
                </div>
                <div className="card border-0 w-20 bg-white py-4 pl-4 pr-2 shadow-lg">
                    <img className="card-img-top w-75 mx-auto" src={learning}></img>
                    <p className="mt-5">Assignments and todo tasks that will help in building strong base knowledge.</p>
                </div>
                <div className="card border-0 w-20 bg-white py-4 pl-4 pr-2 shadow-lg">
                    <img className="card-img-top w-75 mx-auto" src={career}></img>
                    <p className="mt-5">Special couses matching industry standards and updated regularly.</p>
                </div>
            </div>
        </div>
    )
}
