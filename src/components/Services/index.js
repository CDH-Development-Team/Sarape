import React, { useState } from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import Icon4 from "../../textiles_png/3_textiles/AT-2020-16-2.png";
import Icon5 from "../../textiles_png/3_textiles/AT-2020-16-3.png";
import Icon6 from "../../textiles_png/3_textiles/AT-2020-16-4.png";
import Icon7 from "../../textiles_png/3_textiles/AT-2020-16-5.png";
import Icon8 from "../../textiles_png/3_textiles/AT-2020-16-6.png";
import Icon9 from "../../textiles_png/3_textiles/AT-2020-16-7.png";
import close from "../../images/close.png";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  SarapeObj1,
  SarapeObj2,
  SarapeObj3,
  SarapeObj4,
  SarapeObj5,
  SarapeObj6,
  SarapeObj7,
} from "../InfoSection/Data";
// import AnimeList from '../components/anime';
import "./styles.css";
// import Modal2 from '../components/Modal2/modal2';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Quote,
  QuoteDiv,
  QuoteAuthor,
} from "./ServicesElements";
/*import Modal from '../Modal/index.js';
import Modal2 from '../Modal2/modal2';
*/

import Modal from "react-modal";
//styling of the modal itself
const customStyles = {
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#4a0033",
    color: "#fff",
  },
};

const Services = () => {
  /*const [showModal, setShowModal] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    */
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = React.useState(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <ServicesContainer id="services">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={close} onClick={closeModal} style={{ width: "5%", float: "right" }} />
        {content}
      </Modal>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon
            src={Icon4}
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div className="text" style={{ width: "50%", marginLeft: "6rem" }}>
                    {/* <h2>John Doe</h2> */}
                    <div
                      style={{
                        fontSize: "4rem",
                        fontFamily: "CancioneITCStd",
                        padding: "1.3rem",
                      }}
                    >
                      FRAGMENT SERIES
                    </div>
                  </div>
                  <div style={{ height: "60%", width: "50%", alignItems: "right" }}>
                    <div style={{ width: "85%", alignItems: "right" }}>
                      <img src={Icon4} style={{ width: "65%" }} alt="Developer" />
                      <p style={{ padding: "0 0 1rem 1.6rem", color: "white" }}>
                        Naturally dyed. Dyes colors made from tree moss, black sapote, indigo,
                        marush, and cochineal.<br></br>AT-2020-16-2
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
          />
          {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
          {/*<Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon4} />*/}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div className="text" style={{ width: "50%", marginLeft: "6rem" }}>
                    {/* <h2>John Doe</h2> */}
                    <div
                      style={{
                        fontSize: "4rem",
                        fontFamily: "CancioneITCStd",
                        padding: "1.3rem",
                      }}
                    >
                      FRAGMENT SERIES
                    </div>
                  </div>
                  <div style={{ height: "60%", width: "50%", alignItems: "right" }}>
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img src={Icon5} style={{ width: "65%" }} alt="Developer" />
                      <p style={{ padding: "0 0 1rem 1.6rem", color: "white" }}>
                        Naturally dyed. Dyes colors made from tree moss, indigo, and cochineal.
                        <br></br>AT-2020-16-3
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon5}
          />
          {/* <ServicesH2>Virtual offices</ServicesH2> */}
          {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div className="text" style={{ width: "100%", marginLeft: "6rem" }}>
                    {/* <h2>John Doe</h2> */}
                    <div
                      style={{
                        fontSize: "4rem",
                        fontFamily: "CancioneITCStd",
                        padding: "1.3rem",
                      }}
                    >
                      FRAGMENT SERIES
                    </div>
                  </div>
                  <div style={{ alignItems: "right" }}>
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        alignItems: "right",
                        overflow: "hidden",
                      }}
                    >
                      <img src={Icon6} style={{ height: "65%" }} alt="Developer" />
                      <p style={{ padding: "0 0 1rem 1.6rem", color: "white" }}>
                        Naturally dyed. Dyes colors made from indigo.<br></br>AT-2020-16-4
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon6}
          />
          {/* <ServicesH2>Premium Benefits</ServicesH2> */}
          {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div className="text" style={{ width: "50%", marginLeft: "6rem" }}>
                    {/* <h2>John Doe</h2> */}
                    <div
                      style={{
                        fontSize: "4rem",
                        fontFamily: "CancioneITCStd",
                        padding: "1.3rem",
                      }}
                    >
                      FRAGMENT SERIES
                    </div>
                  </div>
                  <div style={{ height: "60%", width: "50%", alignItems: "right" }}>
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img src={Icon7} style={{ width: "65%" }} alt="Developer" />
                      <p style={{ padding: "0 0 1rem 1.6rem", color: "white" }}>
                        Naturally dyed. Dyes colors made from indigo.<br></br>AT-2020-16-5
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon7}
          />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div className="text" style={{ width: "50%", marginLeft: "6rem" }}>
                    {/* <h2>John Doe</h2> */}
                    <div
                      style={{
                        fontSize: "4rem",
                        fontFamily: "CancioneITCStd",
                        padding: "1.3rem",
                      }}
                    >
                      FRAGMENT SERIES
                    </div>
                  </div>
                  <div style={{ height: "60%", width: "50%", alignItems: "right" }}>
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img src={Icon8} style={{ width: "65%" }} alt="Developer" />
                      <p style={{ padding: "0 0 1rem 1.6rem", color: "white" }}>
                        Naturally dyed. Dyes colors made from tree moss, Mexican tarragon, indigo,
                        and cochineal. <br></br>AT-2020-16-6
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon8}
          />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div className="text" style={{ width: "50%", marginLeft: "6rem" }}>
                    {/* <h2>John Doe</h2> */}
                    <div
                      style={{
                        fontSize: "4rem",
                        fontFamily: "CancioneITCStd",
                        padding: "1.3rem",
                      }}
                    >
                      FRAGMENT SERIES
                    </div>
                  </div>
                  <div style={{ height: "60%", width: "50%", alignItems: "right" }}>
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img src={Icon9} style={{ width: "65%" }} alt="Developer" />
                      <p style={{ padding: "0 0 1rem 1.6rem", color: "white" }}>
                        Naturally dyed. Dyes colors made from Mexican tarragon, black sapote,
                        indigo, and cochineal. <br></br>AT-2020-16-7
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon9}
          />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>

      <ServicesH1>FRAGMENT SERIES BY PORFIRIO GUTIERREZ</ServicesH1>
      <ServicesP>
        My ongoing Fragment series is my interpretation of one of the most remarkable weaving
        traditions created by the blending of Native American and European traditions. These pieces
        reflect how the merger created new forms of expression in the art of weaving. This style of
        weaving became part of our Mexican cultural identity and remains part of my personal
        expression. My Fragment series pays homage to our ancestral weavers, who, in many cases,
        were slaves yet they contributed their unique design sensibilities and left an artistic
        legacy we can still appreciate and respect today.
      </ServicesP>

      {/*<Modal2 show1={show1} onClose={() => setShow1(false)}>*/}

      {/*</Modal2>*/}

      {/* <Modal2 show1={show1} onClose={() => setShow1(false)}>
                <div>
                    <div>
                            <img
                                src={Icon4}
                                alt="Developer"
                                style={{width: "30%"}}
                            />
                    </div>
                    <div>
                    Naturally dyed. Dyes colors made from tree moss, black sapote, indigo, marush, and cochineal.<br></br>AT-2020-16-2
                    </div>
                </div> */}
      {/* <div className="content">
            <img
                src={Icon4}
                alt="Developer"
                style={{width: "30%"}}
            />
            <div className="text">
                {/* <h2>John Doe</h2> */}
      {/* <div>
                Naturally dyed. Dyes colors made from tree moss, black sapote, indigo, marush, and cochineal.<br></br>AT-2020-16-2
                </div>
            </div>
            </div>  */}
      {/* </Modal2> */}

      <br></br>
      <br></br>
      <QuoteDiv>
        <Quote>
          “This art form is a deep part of my culture and is my life. It is like my native language
          or our ceremonies. The cochineal produces a color just like the color of our blood; the
          weft and the warp are like the tissue in our body. Textiles are our second skin as well as
          a means of expression.”{" "}
        </Quote>
        <QuoteAuthor>Porfirio Gutiérrez</QuoteAuthor>
      </QuoteDiv>
    </ServicesContainer>
  );
};

export default Services;
