import React from 'react';

import { InfoContainer, InfoWrapper, InfoRow,  Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Column } from './section7Elements';

const SevenSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description,description2, description3, imgdesc, imgdesc2, imgdesc3, imgdesc4, imgdesc5, imgdesc6, buttonLabel, block, img,img2,img3,img4, alt, alt2,alt3,  side, primary, dark, dark2, smallImg}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
           
                <InfoWrapper>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <InfoRow imgStart={imgStart}>
                    
                        <Column1 block={block}>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Subtitle darkText={darkText}>{description3}</Subtitle>
                            </TextWrapper>
                        </Column1>    
                        <Column2 block={block}>
                            <ImgWrap>
                                <Subtitle darkText={darkText}>{imgdesc}</Subtitle>
                                <Img border="none" smallImg={smallImg} src={img} alt=""/>
                                <Subtitle darkText={darkText}>{imgdesc2}</Subtitle>
                                <Img border="none" smallImg={smallImg} src={img2} alt=""/>
                                <Subtitle darkText={darkText}>{imgdesc3}</Subtitle>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>    
                </InfoWrapper>   
            </InfoContainer> 
        </>
    );
}

export default SevenSection;