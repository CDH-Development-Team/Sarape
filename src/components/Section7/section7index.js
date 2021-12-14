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
  BtnWrap,
  ImgWrap,
  Img,
  Column,
  Quote,
  QuoteAuthor,
  QuoteDiv,
} from "./section7Elements";

const SevenSection = ({
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
  imgdesc5,
  imgdesc6,
  buttonLabel,
  img,
  img2,
  img3,
  img4,
  alt,
  alt2,
  alt3,
  side,
  primary,
  dark,
  dark2,
  smallImg,
  margImg,
  quote1,
  author,
  smallDesc,
}) => {
  console.log("margimage:", headline, margImg);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Heading lightText={lightText}>{headline}</Heading>
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
                <QuoteDiv>
                  <Quote>{quote1}</Quote>
                  <QuoteAuthor>{author}</QuoteAuthor>
                </QuoteDiv>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1rem" }}
                >
                  {description3}
                </Subtitle>
                <Img border="none" smallImg={smallImg} src={img3} alt="" />
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "1rem" }}
                >
                  {imgdesc4}
                </Subtitle>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "", fontSize: "13px" }}
                >
                  {smallDesc}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img border="none" src={img} smallImg={smallImg} alt="" />
                <br></br>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "" }}
                >
                  {imgdesc}
                </Subtitle>
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "" }}
                >
                  {imgdesc2}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={smallImg}
                  margImg={margImg}
                  src={img2}
                  alt=""
                />
                <Subtitle
                  darkText={darkText}
                  style={{ fontFamily: "" }}
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

export default SevenSection;
