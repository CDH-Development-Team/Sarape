import React, {useState} from "react";
import ModalVideo from 'react-modal-video'
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
  alt
}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1 style={{ marginLeft: "3rem", width: "85%" }}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText} style={{ fontSize: "2.5rem", position: "relative", overflow:"hidden"}}>
              {headline}
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_6TEaFLJQGY" onClose={() => setOpen(false)} />

			<button className="btn-primary" style={{marginLeft:"1rem", position: "absolute", top: "10%", height:"2rem", fontSize:'1.2rem'}} onClick={()=> setOpen(true)}>Listen to Curator</button>
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
