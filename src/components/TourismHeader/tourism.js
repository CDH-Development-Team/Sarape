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
                                <TextHead>
                                The Mexican nationalist movement of the early 1900s, appropriated the country’s Spanish and Indigenous identities to create a hybrid “Mexican” identity. The Saltillo sarape turned out to be one of the country’s most enduring symbols. This period saw the rise of the rainbow-striped blanket, which became synonymous with Mexico through its use in films, posters, and advertising.
                                <br/><br/>As tourism to Mexico increased, many visitors purchased these colorful sarapes as souvenirs. With demand on the rise, sarape-manufacturing plants were established. Through the use of electric-powered looms, synthetic dyes, and acrylic yarns, production time was shortened and the number of textiles increased. As a result, by the 1930s, there was a drastic decline in handwoven sarapes and the use of natural-dyed yarns.
                                </TextHead>
                                {/* <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle> */}
                                <Img2 src={img} alt={alt}/>
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
