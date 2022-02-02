import Modal from "react-modal";
import React, { useState } from "react";
import "./styles.css";
import Section7 from "../Section7/section7index";

import {
  sevenObj,
  sevenObjOne,
  sevenObjTwo,
  sevenObjThree,
  sevenObjFour,
  sevenObjFive,
  sevenObjSix,
  sevenObjSeven,
} from "../Section7/section7-data";

import Icon1 from "../../textiles_png/7_textiles/7A1_1978-1-2.png";
import Icon2 from "../../textiles_png/7_textiles/7A2_1980-29-1.png";
import Icon3 from "../../textiles_png/7_textiles/7B1_1976-11-1.png";
import Icon4 from "../../textiles_png/7_textiles/7B2_E-6102.png";
import Icon5 from "../../textiles_png/7_textiles/7C1_E-2724.png";
import Icon6 from "../../textiles_png/7_textiles/7C2_E-8988.png";
import Icon7 from "../../textiles_png/7_textiles/7C3_E-83.png";
import Icon8 from "../../textiles_png/7_textiles/7C4_at_2020-337-1.png";
import close from "../../images/close.png";
import "./styles.css";

import {
  ServicesContainer,
  ServicesWrapper6,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";

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
  const [showModal, setShowModal] = useState(false);
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
        <img
          src={close}
          alt=""
          onClick={closeModal}
          style={{ width: "2.5%", float: "right" }}
        />

        {content}
      </Modal>

      <ServicesWrapper6>
        <ServicesCard>
          <ServicesIcon
            src={Icon1}
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "50%", marginLeft: "6rem" }}
                  >
                    <div
                      style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                    >
                      Although the diamond may have been a traditional Rarámuri
                      motif, the design layout shows a definite Saltillo sarape
                      influence.
                    </div>
                  </div>
                  <div
                    style={{ height: "60%", width: "50%", alignItems: "right" }}
                  >
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img
                        src={Icon1}
                        style={{ width: "85%" }}
                        alt="Developer"
                      />
                      <p
                        style={{
                          fontSize: "1rem",
                          padding: "0 0 .5rem 1.2rem",
                          color: "white",
                        }}
                      >
                        Post-Classic period Saltillo sarape, c. 1870
                        <br />
                        Wool, cotton, and indigo and possibly synthetic dyes
                        <br />
                        12504
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
        </ServicesCard>
        <div>
          <ServicesCard>
            <ServicesIcon
              src={Icon2}
              onClick={() => {
                setContent(
                  <div className="content" style={{ alignItems: "right" }}>
                    <div
                      className="text"
                      style={{ width: "50%", marginLeft: "6rem" }}
                    >
                      <div
                        style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                      >
                        This early-1900s Mayo sarape has an unusually large
                        central diamond superimposed on a typical Saltillo
                        sarape design layout.
                      </div>
                    </div>
                    <div
                      style={{
                        height: "60%",
                        width: "50%",
                        alignItems: "right",
                      }}
                    >
                      <div style={{ width: "65%", alignItems: "right" }}>
                        <img
                          src={Icon2}
                          style={{ width: "80%" }}
                          alt="Developer"
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            padding: "0 0 .5rem 1.2rem",
                            color: "white",
                          }}
                        >
                          Mayo sarape, c. 1920
                          <br />
                          Wool and indigo dye
                          <br />
                          Gift of thr University of Arizona Foundation
                          <br />
                          1980-29-1
                        </p>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            />
            {/* <ServicesH2>Virtual offices</ServicesH2> */}
            {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon
              src={Icon3}
              onClick={() => {
                setContent(
                  <div className="content" style={{ alignItems: "right" }}>
                    <div
                      className="text"
                      style={{ width: "50%", marginLeft: "6rem" }}
                    >
                      <div
                        style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                      >
                        Large, bold elements were common in Rio Grande blanket
                        designs. During the last quarter of the 1800s, in both
                        New Mexico and Mexico, backgrounds of Saltillo sarape
                        designs became increasingly complex.
                      </div>
                    </div>
                    <div
                      style={{
                        height: "60%",
                        width: "50%",
                        alignItems: "right",
                      }}
                    >
                      <div style={{ width: "65%", alignItems: "right" }}>
                        <img
                          src={Icon3}
                          style={{ width: "80%" }}
                          alt="Developer"
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            padding: "0 0 .5rem 1.2rem",
                            color: "white",
                          }}
                        >
                          Rio Grande blanket, c. 1890
                          <br />
                          New Mexico
                          <br />
                          Wool, cotton and synthetic dyes
                          <br />
                          Gift of Mr. and Mrs. William Serat
                          <br />
                          1976-11-1
                        </p>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            />
            {/* <ServicesH2>Premium Benefits</ServicesH2> */}
            {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </ServicesCard>
        </div>
        <ServicesCard>
          <ServicesIcon
            src={Icon4}
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "50%", marginLeft: "6rem" }}
                  >
                    <div
                      style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                    >
                      This Chimayo blanket’s design shows a strong Mexican
                      Saltillo influence yet has a distinctive New Mexico flair.
                    </div>
                  </div>
                  <div
                    style={{ height: "60%", width: "50%", alignItems: "right" }}
                  >
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img
                        src={Icon4}
                        style={{ width: "85%" }}
                        alt="Developer"
                      />
                      <p
                        style={{
                          fontSize: "1rem",
                          padding: "0 0 .5rem 1.2rem",
                          color: "white",
                        }}
                      >
                        Chimayo blanket, c. 1920-1950
                        <br />
                        Wool, cotton and synthetic dyes
                        <br />
                        Gift of Mrs. Robert Schuman Steinert, 1964
                        <br />
                        E-6102
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
          />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </ServicesCard>
        <div>
          <ServicesCard>
            <ServicesIcon
              src={Icon5}
              onClick={() => {
                setContent(
                  <div className="content" style={{ alignItems: "right" }}>
                    <div
                      className="text"
                      style={{ width: "50%", marginLeft: "6rem" }}
                    >
                      <div
                        style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                      >
                        This textile was woven by a master artist who may have
                        been inspired by a Saltillo sarape, as it has multiple
                        diamond motifs. The weave is extremely tight, a
                        characteristic of Classic period sarapes, and is dyed
                        with cochineal and indigo. Military men were among the
                        first Americans to purchase Navajo sarapes.
                      </div>
                    </div>
                    <div
                      style={{
                        height: "60%",
                        width: "50%",
                        alignItems: "right",
                      }}
                    >
                      <div style={{ width: "65%", alignItems: "right" }}>
                        <img
                          src={Icon5}
                          style={{ width: "95%" }}
                          alt="Developer"
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            padding: "0 0 .5rem 1.2rem",
                            color: "white",
                          }}
                        >
                          Navajo sarape with Saltillo influence, c. 1850
                          <br />
                          Wool, cotton and cochineal and indigo dyes
                          <br />
                          Collected by Lieutenant John Sanford Mason, c. 1870
                          <br />
                          Purchase from Major Ennalls Waggaman, 1954
                          <br />
                          E-2724
                        </p>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon
              src={Icon6}
              onClick={() => {
                setContent(
                  <div className="content" style={{ alignItems: "right" }}>
                    <div
                      className="text"
                      style={{ width: "50%", marginLeft: "6rem" }}
                    >
                      <div
                        style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                      >
                        This Navajo blanket is woven with commercial pre-dyed
                        Germantown yarns that were supplied to Navajo weavers by
                        traders.
                      </div>
                    </div>
                    <div
                      style={{
                        height: "60%",
                        width: "50%",
                        alignItems: "right",
                      }}
                    >
                      <div style={{ width: "65%", alignItems: "right" }}>
                        <img
                          src={Icon6}
                          style={{ width: "85%" }}
                          alt="Developer"
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            padding: "0 0 .5rem 1.2rem",
                            color: "white",
                          }}
                        >
                          Navajo blanket, c. 1890
                          <br />
                          Wool, cotton and synthetic dyes
                          <br />
                          Gift of the Estate of Julia Howell Overshiner, 1970
                          <br />
                          E-8988
                        </p>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </ServicesCard>
        </div>
        <ServicesCard>
          <ServicesIcon
            src={Icon7}
            onClick={() => {
              setContent(
                <div className="content" style={{ alignItems: "right" }}>
                  <div
                    className="text"
                    style={{ width: "50%", marginLeft: "6rem" }}
                  >
                    <div
                      style={{ fontSize: "1.5rem", fontFamily: "myriad-pro" }}
                    >
                      This is a Third Phase Chief ’s blanket, a style dating to
                      the 1860s. While earlier versions were made to be worn,
                      later ones were created for the tourist market and were
                      more likely used as rugs or hung on walls as artwork. The
                      diamond motif is abundant and centralized like a sarape.
                    </div>
                  </div>
                  <div
                    style={{ height: "60%", width: "50%", alignItems: "right" }}
                  >
                    <div style={{ width: "65%", alignItems: "right" }}>
                      <img
                        src={Icon7}
                        style={{ width: "100%" }}
                        alt="Developer"
                      />
                      <p
                        style={{
                          fontSize: "1rem",
                          padding: "0 0 .5rem 1.2rem",
                          color: "white",
                        }}
                      >
                        Navajo Third Phase Chief ’s blanket, c. 1927
                        <br />
                        Wool, cotton and synthetic dyes
                        <br />
                        Lukachukai Mountains, AZ
                        <br />
                        Collected by E.J Hands, 1927
                        <br />
                        E-83
                      </p>
                    </div>
                  </div>
                </div>
              );
              openModal();
            }}
          />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </ServicesCard>
        <div>
          <ServicesCard>
            <ServicesIcon
              src={Icon8}
              onClick={() => {
                setContent(
                  <div className="content" style={{ alignItems: "right" }}>
                    <div
                      className="text"
                      style={{ width: "50%", marginLeft: "6rem" }}
                    ></div>
                    <div
                      style={{
                        height: "60%",
                        width: "50%",
                        alignItems: "right",
                      }}
                    >
                      <div style={{ width: "65%", alignItems: "right" }}>
                        <img
                          src={Icon8}
                          style={{ width: "80%" }}
                          alt="Developer"
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            padding: "0 0 .5rem 1.2rem",
                            color: "white",
                          }}
                        >
                          Poncho sarape, 2015
                          <br />
                          Kathy Marianito
                          <br />
                          Churro wool, cotton, cochineal, and indigo dyes
                          <br />
                          Purchased by ASM Friends of Collections
                          <br />
                          2020-337-1
                        </p>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </ServicesCard>
        </div>
      </ServicesWrapper6>
      <Section7 {...sevenObj} />
      <Section7 {...sevenObjOne} />
      <Section7 {...sevenObjTwo} />
      <Section7 {...sevenObjThree} />
      <Section7 {...sevenObjFour} />
      <Section7 {...sevenObjFive} />
      <Section7 {...sevenObjSix} />
      <Section7 {...sevenObjSeven} />
    </ServicesContainer>
  );
};

export default Services;
