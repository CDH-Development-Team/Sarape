import React from 'react';
import { Button } from "../ButtonElement";

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Artifact, Caption } from './TourismElements';

const TourismSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description,description2,description3, buttonLabel, img,alt, artifact, artifactAlt, artifactInfo, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                <TopLine>{topLine}</TopLine>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <ImgWrap>
                                    <Img src={artifact} alt={artifactAlt}/>
                                    <Caption darkText={darkText}>{artifactInfo}</Caption>
                                </ImgWrap>
                                {/* <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap> */}
                            </TextWrapper>
                        </Column1>    
                        <Column2>
                            <ImgWrap>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Img src={img} alt={alt}/>
                                <Caption darkText={darkText}>{description2}</Caption>
                                <Caption darkText={darkText}>{description3}</Caption>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>    
                </InfoWrapper>   
            </InfoContainer> 
        </>
    );
}

export default TourismSection;
