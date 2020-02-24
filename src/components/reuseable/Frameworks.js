import React, { Component } from 'react'
import { FaReact,FaVuejs,FaLaravel, FaAngular } from 'react-icons/Fa'
import { DiDjango} from 'react-icons/di'
export default class Frameworks extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <h1>One stop location to learn all Web frameworks!</h1>
                <div className="container d-flex flex-row mx-auto bg-light justify-content-around">
                    <div className="framecard d-flex flex-column">
                        <FaLaravel className="frameicon"/>
                        Laravel
                    </div>
                    <div className="framecard d-flex flex-column">
                        <FaVuejs  className="frameicon"/>
                        Vue.js
                    </div>
                    <div className="framecard d-flex flex-column">
                        <FaReact  className="frameicon"/>React.js</div>
                    <div className="framecard d-flex flex-column "><FaAngular  className="frameicon"/>
                    Angular 2</div>
                    <div className="framecard d-flex flex-column"><DiDjango  className="frameicon"/>
                    Django</div>
                </div>
            </div>
        )
    }
}
