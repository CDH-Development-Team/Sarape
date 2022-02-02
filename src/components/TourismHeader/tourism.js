import React from 'react';

import img1 from "../../images/tourismInMexico.jpg";
import img2 from "../../images/candids.jpg";
import img3 from "../../textiles_png/8_textiles/8425.jpg";
import img4 from "../../textiles_png/8_textiles/educational_textile.jpg";
import img5 from "../../images/8_ceramics.png";

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, ImgWrap, ImgWrap2, Img, Img2, Caption, TextHead } from './TourismElements';

const TourismSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description3,img,alt, artifact, artifactAlt, artifactInfo, primary, dark, dark2}) => {
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
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <ImgWrap>
                                    <Img src={img5} alt={artifactAlt}/>
                                    <Caption darkText={darkText}>{"Ceramic Figurines, c. 1900-1920. ASM 156"}</Caption>
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>    
                        <Column2>
                            <Heading lightText={lightText}>{""}</Heading>
                            <ImgWrap2>
                                <TextHead>
                                Mexican ceramic artists in the area of Guadalajara responded to the tourist market by creating miniature scenes of Mexican people from the 1800s. Often, the male figures who rode or worked with horses were depicted wearing Saltillo sarapes.
                                <br/><br/>
                                The attire of the two male figures wrapped in Saltillo sarapes indicates they are part of the upper class. The vaquero carries a sarape rolled up behind his saddle.
                                </TextHead>
                                {/* <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle> */}
                            </ImgWrap2>
                        </Column2>
                    </InfoRow>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <ImgWrap>
                                    <Img src={img3} style={{width:'50%', float: 'right'}} alt={'Tourist Photograph, May 5, 1920. Tijuana, Mexico. Loan from Tom Kieft'}/>
                                    <Caption style={{float: 'right'}} darkText={darkText}>{'Rainbow-striped Saltillo Sarape c. 1900, Wool, Cotton, and Synthetic Dyes, ASM Purchase from Nelle A. Dermont, 1919, 8425'}</Caption>
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>    
                        <Column2>
                            <Heading lightText={lightText}>{""}</Heading>
                            <ImgWrap2>
                                <TextHead>
                                This photo shows tourists wearing Saltillo sarapes and sombreros while visiting Tijuana, Mexico. These items would have been purchased as souvenirs and gifts, increasing their recognition as symbols of Mexico.
                                </TextHead>
                                {/* <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle> */}
                                <Img2 src={img1} alt={alt}/>
                                <Caption darkText={darkText}>{'Tourist Photograph, May 5, 1920. Tijuana, Mexico. Loan from Tom Kieft'}</Caption>
                            </ImgWrap2>
                        </Column2>
                    </InfoRow>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <ImgWrap>
                                    <Img src={img4} style={{width:'50%', float: 'right'}} alt={'Tourist Photograph, May 5, 1920. Tijuana, Mexico. Loan from Tom Kieft'}/>
                                    <Caption style={{float: 'right'}} darkText={darkText}>{'Morning Stars. Zapotec Textile. Wool, Cotton, and Synthetic Dyes. ASM Purchase For Education Collection. 2020'}</Caption>
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>    
                        <Column2>
                            <Heading lightText={lightText}>{""}</Heading>
                            <ImgWrap2>
                                <TextHead>
                                Oaxaca continues to be an important weaving center whose textiles are sold worldwide. Most Zapotec weavers now use synthetic dyes, rather than the traditional natural dyes, which cuts down on the work and makes production faster.
                                </TextHead>
                                {/* <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle> */}
                                <Img2 src={img2} style={{width:'85%'}} alt={alt}/>
                                <Caption darkText={darkText}>{"Zapotec Textiles on Sale at the Arizona State Museum's Southwest Indian Art Fair. Alanah K. Tupponce, Photographer, 2011."}</Caption>
                            </ImgWrap2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>   
            </InfoContainer> 
        </>
    );
}

export default TourismSection;
