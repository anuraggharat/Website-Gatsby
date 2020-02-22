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
            <Heading title="OUR LATEST COURSES"></Heading>
            </div>
            
                <div className="row pt-3 pb-5 text-center justify-content-around">
                    {this.state.courses.map(({node})=>{
                        return(
                        <div className="col-5 mt-5 pt-4 pb-4 d-flex flex-column text-center bg-first single-course"                             
                        data-sal="slide-down"
                        data-sal-delay="500"
                        data-sal-easing="ease">
                        <Link><Img
                            fixed={node.image.fixed}
                            id={node.id}
                            

                            />
                        </Link>
                        <div className="d-flex flex-row justify-content-between mt-3 font-weight-bold" >
                            <h3 className="course-name ml-4 text-dark">{node.title}</h3>
                            <button className="btn btn-success btn-rounded course-price px-4 w-25 mr-4 font-weight-bold snipcart-add-item"
                            data-item-id={node.id}
                            data-item-name={node.title}
                            data-item-price={node.price}
                            data-item-url="https://courses.learncodeonline.in/"
                            data-item-image={node.image.fixed.src}
                            >{node.price}$</button>
                        </div>
                        
                        </div>

                   )
                         })}
                    
                </div>
                
            </div>
        )
    }
}
