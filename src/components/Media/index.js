import React, {useState} from "react";
import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TopLine,
  Heading,
  Subtitle,
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
  cap,
  cap2,
  cap3,
  img,
  alt,
  link
}) => {
  const [setOpen] = useState(false)
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1 style={{ marginLeft: "3rem", width: "85%" }}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText} style={{ fontSize: "2.5rem", position: "relative", overflow:"hidden"}}>
              {headline}
              <React.Fragment>
      <a href={link} target="_blank" rel="noreferrer">
			<button className="btn-primary" style={{padding:".1rem", marginLeft:"1rem", position: "absolute", height:"100%", overflow:'hidden', fontSize:'1.1rem'}} onClick={()=> setOpen(true)}>Open In New Tab</button>
      </a>
    </React.Fragment>
              
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
          </Column1>
          <Column2 style={{ marginRight: "50px" }}>
            <ImgWrap>
              <Img src={img} alt={alt} />
              <div
              style={{
                fontSize: "1rem",
              }}
            >
              <p darkText={darkText}>{cap}</p>
              <p darkText={darkText}>{cap2}</p>
              <p darkText={darkText}>{cap3}</p>
            </div>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
