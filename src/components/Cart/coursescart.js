import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import InfoBlock from '../reuseable/InfoBlock'
import Heading from '../reuseable/Heading'


const getCategories = items =>{
    let holditems = items.map(items =>{
        return items.node.category   
    })
    let holdCategory = new Set(holditems)
    let categories = Array.from(holdCategory)
    categories = ["ALL",...categories]
   
    return categories
}

export default class coursescart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:props.courses.edges,
            choicecourses:props.courses.edges,
            mycategories:getCategories(props.courses.edges)
        }       
    }
    showCategory = category =>{
        let allCourses = [...this.state.courses]
        if(category==="ALL"){
        this.setState(()=>{
            return {choicecourses:allCourses}
        })
        }
        else{
            let singlecatcourse = allCourses.filter(({node})=>
            node.category === category )
            this.setState(()=>{
                return {choicecourses:singlecatcourse}
            })
        }
    }

    
   
    render() {
        return (
            <div className="container d-flex-row justify-content-start no-pad">
            <div className="row d-flex justify-content-center no-pad mt-5">
            <Heading title="OUR LATEST COURSES"></Heading>
            </div>
            
                <div className="row pt-3 pb-5 text-center justify-content-around">
                    <div className=" container row d-flex flex-row justify-content-between py-2">
                        {this.state.mycategories.map((category,index) =>{
                            return(<button className="btn-outline-primary btn py-2 px-4" key={index} onClick={()=>this.showCategory(category)}>{category}</button>)
                            
                        })}
                    </div>
                    {this.state.choicecourses.map(({node})=>{
                        return(
                        <div className="col-5 mt-5 pt-4 pb-4 d-flex flex-column text-center bg-first single-course"                             
                        data-sal="slide-down"
                        data-sal-delay="400"
                        data-sal-easing="ease-in">
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
