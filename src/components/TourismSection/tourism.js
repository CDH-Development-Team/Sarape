import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  ImgWrap2,
  Img,
  Img2,
  Caption,
} from "./TourismElements";

const TourismSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  description2,
  description3,
  img,
  alt,
  smallImg,
  artifact,
  artifactAlt,
  artifactInfo,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TopLine>{topLine}</TopLine>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <ImgWrap>
                  <Img src={artifact} alt={artifactAlt} />
                </ImgWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Heading lightText={lightText}>{headline}</Heading>
              <ImgWrap2>
                <Subtitle style={{ fontSize: "1rem" }} darkText={darkText}>
                  {description}
                </Subtitle>
                <Img2 src={img} smallImg={smallImg} alt={alt} />
                <Subtitle style={{ fontSize: "1rem" }} darkText={darkText}>
                  {description2}
                </Subtitle>
                <Caption style={{ fontSize: "1rem" }} darkText={darkText}>
                  {artifactInfo}
                </Caption>
                <Caption style={{ fontSize: "1rem" }} darkText={darkText}>
                  {description3}
                </Caption>
              </ImgWrap2>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default TourismSection;
