import React from 'react'
import BackgroundImage from 'gatsby-background-image';


export default function HeroSection({ img , heroclass , title , subtitle}) {
    return (
        <BackgroundImage
        className={heroclass}
        fluid={img}
        
        >
        <h1 data-sal="slide-down"
            data-sal-delay="500"
            data-sal-easing="ease-out">
        {title}</h1>
        <h4
        data-sal="slide-up"
        data-sal-delay="900"
        data-sal-easing="ease-in">{subtitle}</h4>
        </BackgroundImage>
    )
}
