import React from 'react';
import { Button } from "../ButtonElement";

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Subtitle1, BtnWrap, ImgWrap, Img } from './creditElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description,description2,description3, cap, cap2, cap3, buttonLabel, img,alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                                <p darkText={darkText}>{cap}</p>
                                <p darkText={darkText}>{cap2}</p>
                                <p darkText={darkText}>{cap3}</p>
                            </ImgWrap>
                        </Column1>  
                    </InfoRow>
                    <InfoRow>
                        <Column2>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Subtitle darkText={darkText}>{description3}</Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>   
            </InfoContainer> 
        </>
    );
}

export default InfoSection;
