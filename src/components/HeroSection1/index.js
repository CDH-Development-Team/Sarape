import React from 'react';
// import { Button } from 'react-scroll';
import Video from "../../images/porfirio2.jpg";
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
} from './HeroElements1';


const HeroSection1 = () => {
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection1;
