import React from "react";
import Icon4 from "../../textiles_png/3_textiles/AT-2020-16-2.png";
import Icon5 from "../../textiles_png/3_textiles/AT-2020-16-3.png";
import Icon6 from "../../textiles_png/3_textiles/AT-2020-16-4.png";
import Icon7 from "../../textiles_png/3_textiles/AT-2020-16-5.png";
import Icon8 from "../../textiles_png/3_textiles/AT-2020-16-6.png";
import Icon9 from "../../textiles_png/3_textiles/AT-2020-16-7.png";
import close from "../../images/close.png";
import "./styles.css";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";
import { Column1, Column2, InfoRow } from "../InfoSection/infoElements.js";

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
    <ServicesContainer id="services" style={{marginBottom:"0px;"}}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img
          src={close}
          alt=""
          onClick={closeModal}
          style={{ width: "2.5%", float: "right" }}
        />
        {content}
      </Modal>

      <ServicesWrapper style={{marginLeft:"0px"}}>
        <ServicesCard>
          <ServicesIcon
            src={Icon4}
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "100%", marginLeft: "6rem" }}
                  >
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        color: "white",
                        marginLeft: "10rem",
                      }}
                    >
                      Naturally dyed. Dyes colors made from tree moss, black
                      sapote, indigo, marush, and cochineal.<br></br>
                      AT-2020-16-2
                    </p>
                  </div>
                  <div
                    style={{ height: "80%", width: "60%", alignItems: "right" }}
                  >
                    <div style={{ width: "85%", alignItems: "right" }}>
                      <img
                        src={Icon4}
                        style={{ width: "75%" }}
                        alt="Developer"
                      />
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "100%", marginLeft: "6rem" }}
                  >
                    {" "}
                    <p
                      style={{
                        marginTop: "3rem",
                        fontSize: "1rem",
                        color: "white",
                        marginLeft: "15rem",
                      }}
                    >
                      Naturally dyed. Dyes colors made from tree moss, indigo,
                      and cochineal.
                      <br></br>AT-2020-16-3
                    </p>
                  </div>
                  <div
                    style={{ height: "80%", width: "80%", alignItems: "right" }}
                  >
                    <div style={{ width: "85%", alignItems: "right" }}>
                      <img
                        src={Icon5}
                        style={{ width: "75%" }}
                        alt="Sarape"
                      />
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon5}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "100%", marginLeft: "1rem" }}
                  >
                    <p
                      style={{
                        marginTop: "4rem",
                        fontSize: "1rem",
                        color: "white",
                        marginLeft: "20rem",
                      }}
                    >
                      Naturally dyed. Dyes colors made from indigo.<br></br>
                      AT-2020-16-4
                    </p>
                  </div>
                  <div style={{ width: "70%", alignItems: "right", overflow:"hidden"}}>
                      <img
                        src={Icon6}
                        style={{ width: "60%" }}
                        alt="Sarape"
                      />
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
                  <div
                    className="text"
                    style={{ width: "100%", marginLeft: "6rem" }}
                  >
                    {" "}
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        color: "white",
                        marginLeft: "15rem",
                      }}
                    >
                      Naturally dyed. Dyes colors made from indigo.<br></br>
                      AT-2020-16-5
                    </p>
                  </div>
                    <div style={{ width: "70%", alignItems: "right", overflow:"hidden"}}>
                      <img
                        src={Icon7}
                        style={{ width: "60%" }}
                        alt="Sarape"
                      />
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon7}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "100%", marginLeft: "6rem" }}
                  >
                    {" "}
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        color: "white",
                        marginLeft: "15rem",
                      }}
                    >
                      Naturally dyed. Dyes colors made from tree moss, Mexican
                      tarragon, indigo, and cochineal. <br></br>AT-2020-16-6
                    </p>
                  </div>
                  <div style={{ width: "70%", alignItems: "right", overflow:"hidden"}}>
                      <img
                        src={Icon8}
                        style={{ width: "60%" }}
                        alt="Sarape"
                      />
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon8}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "100%", marginLeft: "6rem" }}
                  >
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        color: "white",
                        marginLeft: "15rem",
                      }}
                    >
                      Naturally dyed. Dyes colors made from Mexican tarragon,
                      black sapote, indigo, and cochineal. <br></br>
                      AT-2020-16-7
                    </p>
                  </div>
                  <div style={{ width: "70%", alignItems: "right", overflow:"hidden"}}>
                      <img
                        src={Icon9}
                        style={{ width: "60%" }}
                        alt="Sarape"
                      />
                  </div>
                </div>
              );
              openModal();
            }}
            src={Icon9}
          />
        </ServicesCard>
      </ServicesWrapper>
      <ServicesH1
        style={{ marginTop: "30px", marginLeft: "-61rem", textAlign: "left" }}
      >
        FRAGMENT SERIES BY PORFIRIO GUTIÉRREZ
      </ServicesH1>
      <InfoRow style={{ height: "400px" }}>
        <Column1>
          <div
            style={{
              color: "white",
              fontSize: "1.5rem",
              height: "auto",
              marginLeft: "3rem",
            }}
          >
            My ongoing <i>Fragment</i> series is my interpretation of one of the
            most remarkable weaving traditions created by the blending of Native
            American and European traditions. These pieces reflect how the
            merger created new forms of expression in the art of weaving. This
            style of weaving became part of our Mexican cultural identity and
            remains part of my personal expression. My <i>Fragment</i> series
            pays homage to our ancestral weavers, who, in many cases, were
            slaves yet they contributed their unique design sensibilities and
            left an artistic legacy we can still appreciate and respect today.
          </div>
        </Column1>
        <Column2>
          <div
            style={{
              fontFamily: "Lucida",
              color: "white",
              fontSize: "1.5rem",
              marginRight: "3rem",
              height: "auto",
            }}
          >
            “This art form is a deep part of my culture and is my life. It is
            like my native language or our ceremonies. The cochineal produces a
            color just like the color of our blood; the weft and the warp are
            like the tissue in our body. Textiles are our second skin as well as
            a means of expression.”{" "}
          </div>
          <div
            style={{
              fontFamily: "Lucida",
              marginTop: "25px",
              marginLeft: "350px",
              height: "auto",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Porfirio Gutiérrez
          </div>
        </Column2>
      </InfoRow>
    </ServicesContainer>
  );
};

export default Services;
