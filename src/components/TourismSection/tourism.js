import React from 'react';
import { Button } from "../ButtonElement";

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, ImgWrap2, Img, Img2, Img3, Artifact, Caption, TextHead } from './TourismElements';

const TourismSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description,description2,description3, buttonLabel, img,alt, artifact, artifactAlt, artifactInfo, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <TopLine>{topLine}</TopLine>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <ImgWrap>
                                    <Img src={artifact} alt={artifactAlt}/>
                                    <Caption darkText={darkText}>{artifactInfo}</Caption>
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>    
                        <Column2>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <ImgWrap2>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Img2 src={img} alt={alt}/>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Caption darkText={darkText}>{description3}</Caption>
                            </ImgWrap2>
                        </Column2>
                    </InfoRow>    
                </InfoWrapper>   
            </InfoContainer> 
        </>
    );
}

export default TourismSection;
