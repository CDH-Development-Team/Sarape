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
  description3,
  cap2,
  cap3,
  img,
  alt
}) => {
  const [vidOpen, setVidOpen] = useState(false);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1 style={{ marginLeft: "3rem", width: "95%" }}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText} style={{fontSize: "2.5rem", position: "relative", overflow: "hidden" }}>
              {headline}
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="TjpCPMdezo4" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{marginLeft:"1rem", position: "absolute", top: "10%", height:"2rem", fontSize:'1.2rem'}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
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
          </Column1>
          <Column2 style={{ marginRight: "50px" }}>
            <ImgWrap>
              <Img src={img} alt={alt} />
              <div
              style={{
                fontSize: "1rem",
              }}
            >
              <p darkText={darkText}>
                <i>Pintura del Gobernador, Alcaldes, y Regidores de M??xico</i>,
                1565
              </p>
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
