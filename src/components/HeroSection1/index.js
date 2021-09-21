import React, {useState} from 'react';
// import { Button } from 'react-scroll';
import Video from "../../images/porfirio2.jpg";
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
} from './HeroElements1';


const HeroSection1 = () => { 
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>
            </HeroBg>
            {/* <HeroContent>
                <HeroH1>PORFIRIO GUTIERREZ</HeroH1>
                <HeroP>
                Master Textile Artist Porfirio Gutiérrez, Exhibit Co-curator
                <br/><br/>
                Porfirio Gutiérrez was born and raised in the Zapotec textile community of Teotitlán del Valle in Oaxaca. As a young boy, he learned the ancient traditions of weaving and natural dyeing from his parents. Today, he lives and works in both Oaxaca and Ventura, California. While others find conflict between ancient ways and the modern world, Gutiérrez is inspired by it. His artwork embodies the convergence of the two worlds, where his soul dwells.
                <br/><br/>
                His life’s work has been reviving and preserving traditional Zapotec natural-dyeing techniques, with a focus on reinterpreting traditional textile designs and materials. His artistic practice is guided by a profound spiritual belief that nature is a living being, which is sacred and to be honored. By using natural materials and simplified imagery that has evolved from his Indigenous traditions and urban life, Gutiérrez seeks to impart a tactile sense of order and peace.  
                <br/><br/>                
                He is inspired by cultural objects such as palm-leaf mats used in ceremonies, traditional textiles, Saltillo sarape designs, and the architecture of ancient buildings at Mitla, one of the most sacred Zapotec sites. Within the urban landscape, he sees direct parallels between Zapotec architecture and the modern lines of mid-century aesthetics. In his pieces, these influences merge in a new and expanding dialogue.
                <br/><br/>
                His studio revolves around the efforts and traditions of family and community, expressing an understanding and a vision that is rooted in his Zapotec culture. Gutiérrez reflects on his ancestors’ knowledge and wisdom to deepen his own understanding of his place in time and history. His work is the result of that reflective spirit and his desire to share his cultural appreciation with younger Zapotecs.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> 
            </HeroContent> */}
        </HeroContainer>
    )
}

export default HeroSection1;
