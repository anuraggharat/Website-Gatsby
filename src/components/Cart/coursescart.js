import React, { Component } from 'react'
import Img from 'gatsby-image'
import InfoBlock from '../reuseable/InfoBlock'
export default class coursescart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:props.courses.edges,
            choicecourses:props.courses.edges
        }
    }
   
    render() {
        return (
            <div className="container  d-flex justify-content-start no-pad">
                <div className="row pt-5 pb-5">
                    {this.state.courses.map(({node})=>{
                        return(
                        <div className="col-6 d-flex justify-content-center mt-5 sal-animate"                             
                        data-sal="slide-down"
                        data-sal-delay="500"
                        data-sal-easing="infinite">
                            <Img
                            fixed={node.image.fixed}
                            id={node.id}
                            className="single-course"

                            /> 
                        </div>

                   )
                         })}
                    
                </div>
                
            </div>
        )
    }
}
