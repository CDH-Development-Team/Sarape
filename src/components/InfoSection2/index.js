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
              style={{
                fontSize: "1.5rem",
                height: "auto",
              }}
            >
              A sarape is a woolen blanket woven longer than it is wide. Named
              for the town of Saltillo, where they were popular trade items from
              the 1600s to the 1800s, Saltillo sarapes are distinguished by a
              central diamond design or a circular medallion on a contrasting
              background enclosed by a border design. Traditionally, they are
              woven on treadle looms with wool yarn colored by natural dyes
              derived from plants, such as indigo (<i>Indigofera tinctoria</i>),
              and from cochineal, an insect.
            </Subtitle>
            <div
              style={{
                fontSize: "1rem",
                marginLeft: "400px",
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
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
