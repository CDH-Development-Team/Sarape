import React from "react";
import { Button } from "../ButtonElement";

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
  Subtitle1,
  BtnWrap,
  ImgWrap,
  Img,
} from "./infoElements";

const InfoSection = ({
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
  cap,
  cap2,
  cap3,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1 style={{ marginLeft: "3rem", width: "85%" }}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText} style={{ fontSize: "2.5rem" }}>
              {headline}
            </Heading>
            <Subtitle
              darkText={darkText}
              style={{ fontSize: "1.5rem", height: "auto" }}
            >
              {description}
            </Subtitle>
            <Subtitle
              darkText={darkText}
              style={{ fontSize: "1.5rem", height: "auto" }}
            >
              {description2}
            </Subtitle>
            <Subtitle
              darkText={darkText}
              style={{ fontSize: "1.5rem", height: "auto" }}
            >
              {description3}
            </Subtitle>
            <div
              style={{
                fontSize: "1rem",
                marginLeft: "280px",
                marginTop: "70px",
              }}
            >
              <p darkText={darkText}>{cap}</p>
              <p darkText={darkText}>{cap2}</p>
              <p darkText={darkText}>{cap3}</p>
            </div>
          </Column1>
          <Column2 style={{ marginRight: "50px" }}>
            <ImgWrap>
              <Img src={img} alt={alt} style={{ marginTop: "5rem" }} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
