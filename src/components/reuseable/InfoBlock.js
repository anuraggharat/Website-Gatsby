import React from 'react'
import Heading from '../reuseable/Heading'
export default function InfoBlock({heading,details}) {
    return (
        <div className="jumbotron px-auto text-center">
            <Heading
            title={heading} 
            />
            <p className="text mt-4 lead">{details}</p>
            
        </div>
    )
}
