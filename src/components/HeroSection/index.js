import React, {useState} from 'react';
import Video from "../../videos/TimeLapse2021_3.mp4";
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
import Image360 from "..//../images/360-degrees.png"


const HeroSection = () => { 
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} style={{opacity: 0.55}} type = 'video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Wrapped In Color</HeroH1>
                <HeroBtnWrapper>
                    <Button to="/intro" onMouseEnter={onHover} onMouseLeave={onHover}>
                        ENTER {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    <a href = "https://my.matterport.com/show/?m=fU9JUqSoNBp" ><img src={Image360} style={{width: "9vw"}}>
                    </img></a>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
