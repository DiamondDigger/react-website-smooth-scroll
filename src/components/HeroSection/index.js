import React from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from './HeroElements'
import Video from '../../videos'

const HeroSection = () => {
    return (
        <>
          <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop full src={Video} type='video/mp4'/>
            </HeroBg>
            </HeroContainer>  
        </>
    )
}

export default HeroSection
