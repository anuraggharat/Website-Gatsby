import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import InfoBlock from '../reuseable/InfoBlock'
import Heading from '../reuseable/Heading'
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
            <div className="container d-flex-row justify-content-start no-pad">
            <div className="row d-flex justify-content-center no-pad mt-5">
            <Heading title="Our Latest Courses"></Heading>
            </div>
            
                <div className="row pt-3 pb-5">
                    {this.state.courses.map(({node})=>{
                        return(
                        <div className="col-6 d-flex justify-content-center mt-5"                             
                        data-sal="slide-down"
                        data-sal-delay="500"
                        data-sal-easing="ease">
                        <Link><Img
                            fixed={node.image.fixed}
                            id={node.id}
                            className="single-course"

                            /></Link>     
                        </div>

                   )
                         })}
                    
                </div>
                
            </div>
        )
    }
}
