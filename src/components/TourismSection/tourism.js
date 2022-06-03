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
  artifactAlt
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TopLine>
            {topLine}
          </TopLine>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <ImgWrap>
                  <Img src={artifact} alt={artifactAlt} />
                </ImgWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Heading lightText={lightText}>
                {headline}
                <React.Fragment>
                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tx-4kgcdu4" onClose={() => setOpen(false)} />
                  <button className="btn-primary" style={{marginLeft:"1rem", position: "relative", top: "-0.5rem", height:"2rem", fontSize:'1.2rem'}} onClick={()=> setOpen(true)}>Listen to Curator</button>
                </React.Fragment>
              </Heading>
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
