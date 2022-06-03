import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalVideo from 'react-modal-video'
import InfoSection from "../components/InfoSection";
import {
  Column1,
  Column2,
  InfoRow,
} from "../components/InfoSection/infoElements.js";
import {
  homeObjFour,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import HeroSection1 from "../components/HeroSection1";
import Footer from "../components/Footer";

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);
const [vidOpen, setVidOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection1 />

      <div
        style={{
          textAlign: "left",
          padding: "4rem",
          backgroundColor: "rgb(74, 0,51)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", position: "relative"}}>PORFIRIO GUTIÉRREZ
        <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="k651uaQj1gg" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{marginLeft:"1rem", position: "absolute", top: "10%", height:"2rem", fontSize:'1.2rem'}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		</React.Fragment>
    </h1>
        <br></br>
        <br></br>
        <br></br>
        <InfoRow>
          <Column1
            style={{
              textAlign: "left",
              fontFamily: "",
              fontSize: "1.5rem",
            }}
          >
            Master Textile Artist Porfirio Gutiérrez, Exhibit Co-curator
            <br></br>
            <br></br>
            Porfirio Gutiérrez was born and raised in the Zapotec textile
            community of Teotitlán del Valle in Oaxaca. As a young boy, he
            learned the ancient traditions of weaving and natural dyeing from
            his parents. Today, he lives and works in both Oaxaca and Ventura,
            California. While others find conflict between ancient ways and the
            modern world, Gutiérrez is inspired by it. His artwork embodies the
            convergence of the two worlds, where his soul dwells.
            <br></br>
            <br></br>
            His life’s work has been reviving and preserving traditional Zapotec
            natural-dyeing techniques, with a focus on reinterpreting
            traditional textile designs and materials. His artistic practice is
            guided by a profound spiritual belief that nature is a living being,
            which is sacred and to be honored. By using natural materials and
            simplified imagery that has evolved from his Indigenous traditions
            and urban life, Gutiérrez seeks to impart a tactile sense of order
            and peace.<br></br>
            <br></br>
          </Column1>
          <Column2
            style={{
              textAlign: "left",
              fontFamily: "",
              fontSize: "1.5rem",
            }}
          >
            He is inspired by cultural objects such as palm-leaf mats used in
            ceremonies, traditional textiles, Saltillo sarape designs, and the
            architecture of ancient buildings at Mitla, one of the most sacred
            Zapotec sites. Within the urban landscape, he sees direct parallels
            between Zapotec architecture and the modern lines of mid-century
            aesthetics. In his pieces, these influences merge in a new and
            expanding dialogue.<br></br>
            <br></br>
            His studio revolves around the efforts and traditions of family and
            community, expressing an understanding and a vision that is rooted
            in his Zapotec culture. Gutiérrez reflects on his ancestors’
            knowledge and wisdom to deepen his own understanding of his place in
            time and history. His work is the result of that reflective spirit
            and his desire to share his cultural appreciation with younger
            Zapotecs.
          </Column2>
        </InfoRow>
      </div>
      <Services />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default SigninPage;
