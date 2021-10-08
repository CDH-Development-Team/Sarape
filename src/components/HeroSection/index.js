import React, {useState} from 'react';
import Video from "../../videos/video1.mp4";
import GeographyPage from "../../pages/geography.js";
import { Button } from "../ButtonElement";
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';


const HeroSection = () => { 
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Wrapped In Color</HeroH1>
                <HeroBtnWrapper>
                    <Button to="/geography" onMouseEnter={onHover} onMouseLeave={onHover}>
                        ENTER {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
