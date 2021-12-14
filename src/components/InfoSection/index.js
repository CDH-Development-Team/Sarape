import React, {useState} from "react";
import { Button } from "../ButtonElement";
import ModalVideo from 'react-modal-video'
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
  const [vidOpen, setVidOpen] = useState(false);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1 style={{ marginLeft: "3rem", width: "95%" }}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText} style={{ fontSize: "2.5rem", position: "relative" }}>
              {headline}
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="TjpCPMdezo4" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{height:"2rem", position:"absolute", top:"10%", marginLeft:"1rem"}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		</React.Fragment>
            </Heading>
            
            <Subtitle
              darkText={darkText}
              style={{ fontSize: "1.5rem", height: "auto" }}
            >
              Spain imposed the European guild system on textile production,
              which dictated who could perform certain tasks. As a result, men
              were employed as weavers in the <i>obrajes</i> (textile
              workshops). They used European treadle looms with foot pedals to
              produce fabric for export, for domestic use, and to fulfill
              tribute payments to the Spanish authorities. The Aztecs had also
              demanded tribute in the form of textiles from those they
              conquered.
            </Subtitle>
            <Subtitle
              darkText={darkText}
              style={{ fontSize: "1.5rem", height: "auto" }}
            >
              The treadle looms could quickly produce wide textiles that had
              tighter warp tension, which is important for creating complicated
              designs like those in Saltillo sarapes. In the <i>obrajes</i>,
              yarn was spun on European-style spinning wheels, which further
              increased production speed. Indigenous women, who traditionally
              were the weavers, continued to use hand spindles for spinning the
              yarns and the backstrap loom to weave their own clothing and
              household textiles.
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
                marginLeft: "20rem",
              }}
            >
              <p darkText={darkText}>
                <i>Pintura del Gobernador, Alcaldes, y Regidores de México</i>,
                1565
              </p>
              <p darkText={darkText}>{cap2}</p>
              <p darkText={darkText}>{cap3}</p>
            </div>
          </Column1>
          <Column2 style={{ marginRight: "50px" }}>
            <ImgWrap>
              <Img src={img} alt={alt} style={{ marginTop: "150px" }} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
