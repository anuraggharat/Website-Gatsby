import React, { Component } from 'react'
import { FaReact,FaVuejs,FaLaravel, FaAngular } from 'react-icons/fa'
import { DiDjango} from 'react-icons/di'
export default class Frameworks extends Component {
    render() {
        return (
            <div className="container-fluid bg-light pb-5">
                <h1 className="text-center text-bold mb-5 text-second sectionheading">One stop location to learn all Web frameworks!</h1>
                <div className="container d-flex flex-row mx-auto bg-light justify-content-around framecardcontainer">
                    <div className="framecard d-flex flex-column shadow"
                                                    data-sal="fade"
                                                    data-sal-delay="600"
                                                    data-sal-easing="ease">
                        <FaLaravel className="frameicon text-first"/>
                        <p className="text-center text-second ">Laravel</p>
                    </div>
                    <div className="framecard d-flex flex-column shadow "
                        data-sal="fade"
                        data-sal-delay="700"
                        data-sal-easing="ease">
                        <FaVuejs  className="frameicon text-first"/>
                        <p className="text-center text-second">Vue.js</p>
                        
                    </div>
                    <div className="framecard d-flex flex-column shadow"
                        data-sal="fade"
                        data-sal-delay="800"
                        data-sal-easing="ease">
                        <FaReact  className="frameicon text-first"/>
                        <p className="text-center text-second">React.js</p></div>
                    <div className="framecard d-flex flex-column shadow"
                    data-sal="fade"
                    data-sal-delay="900"
                    data-sal-easing="ease"><FaAngular  className="frameicon text-first"/>
                    <p className="text-center text-second">Angular2</p></div>
                    <div className="framecard d-flex flex-column shadow"
                                            data-sal="fade"
                                            data-sal-delay="1000"
                                            data-sal-easing="ease"><DiDjango  className="frameicon text-first"/>
                    <p className="text-center text-second">Django</p></div>
                </div>
            </div>
        )
    }
}
