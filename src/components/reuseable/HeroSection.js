import React from 'react'
import BackgroundImage from 'gatsby-background-image';

export default function HeroSection({ img , heroclass , title , subtitle}) {
    return (
        <BackgroundImage
        className={heroclass}
        fluid={img}
        
        >
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        </BackgroundImage>
    )
}
