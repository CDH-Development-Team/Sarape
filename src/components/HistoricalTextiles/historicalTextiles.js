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
  Img,
} from "./historicalElements";

const HistoricalSection = ({
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
  imgdesc,
  imgdesc2,
  imgdesc3,
  imgdesc4,
  img,
  img2,
  img3,
  smallImg,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Heading lightText={lightText} style={{overflow: 'hidden'}}>{headline}</Heading>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>

                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1.5rem" }}
                >
                  {description}
                </Subtitle>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1.5rem" }}
                >
                  {description2}
                </Subtitle>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1.5rem" }}
                >
                  {description3}
                </Subtitle>
                <Img border="none" smallImg={smallImg} src={img3} alt="" />
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1.5rem" }}
                >
                  {imgdesc4}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1rem" }}
                >
                  {imgdesc}
                </Subtitle>
                <Img border="none" smallImg={smallImg} src={img} alt="" />
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1rem" }}
                >
                  {imgdesc2}
                </Subtitle>
                <Img border="none" smallImg={smallImg} src={img2} alt="" />
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1rem" }}
                >
                  {imgdesc3}
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default HistoricalSection;
