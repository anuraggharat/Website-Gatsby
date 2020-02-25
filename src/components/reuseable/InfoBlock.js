import React from 'react'
export default function InfoBlock({heading,details,img}) {
    return (
        <div className="container-fluid row pb-5 ">
            <div className="col-sm-6 no-mar pt-5 pl-5"
                            data-sal="slide-right"
                            data-sal-delay="500"
                            data-sal-easing="ease">
              <div className="mt-5 text-black bold">
    <h1>{heading}</h1>
              </div>
              <div className="mt-4 lead">{details}
              </div>  
            </div>
            <div className="col-sm-6 bg-white no-mar pt-5"
            >  
                <img src={img} className="w-100" 
                data-sal="slide-left"
                data-sal-delay="700"
                data-sal-easing="ease"/>
            </div>

        </div>
    )
}
