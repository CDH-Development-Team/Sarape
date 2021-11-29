import Modal from "react-modal";
//styling of the modal itself
import styled from "styled-components";

import React, { useState } from "react";
//import Modal2 from '../Modal2/modal2';
//import Modal from '../Modal/index.js';

// import React, { useState } from "react";
import "./styles.css";
import HistoricalSection from "../HistoricalTextiles/historicalTextiles";

import {
  sixObj,
  sixObjOne,
  sixObjTwo,
  sixObjThree,
} from "../HistoricalTextiles/historicalData";

import Icon1 from "../../textiles_png/6_textiles/6A1_at_2020-15-1.png";
import Icon2 from "../../textiles_png/6_textiles/6A2_at_2020-13-1.png";
import Icon3 from "../../textiles_png/6_textiles/6A3_E-1642.png";
import Icon4 from "../../textiles_png/6_textiles/6B1_19766_HIRES.png";
import Icon5 from "../../textiles_png/6_textiles/6B2_12504.png";
import Icon6 from "../../textiles_png/6_textiles/6B4_at_2020-15-2.png";
import Icon7 from "../../textiles_png/6_textiles/6B5_E-4735.png";
import Icon8 from "../../textiles_png/6_textiles/6C1_at_2020-13-2.png";
import Icon9 from "../../textiles_png/6_textiles/6C2_at_2020-14-2.png";
import Icon10 from "../../textiles_png/6_textiles/6C3_1980-2-53.png";
import img2 from "../../textiles_png/6_textiles/six_other/6_saddle.png";
import img3 from "../../textiles_png/6_textiles/six_other/6B1_keift_saddle.png";
import close from "../../images/close.png";

// import AnimeList from '../components/anime';
import "./styles.css";
// import Modal2 from '../components/Modal2/modal2';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper6,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Heading,
  TextWrapper,
  TopLine,
  Subtitle,
  Img,
  Column2,
  ImgWrap,
} from "../InfoSection/infoElements";

import useWindowDimensions from "../Geography/dimensions";

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
  /*const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };*/

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

  const { height, width } = useWindowDimensions();

  let Card = styled.div`
    // background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 0px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
  `;

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
        <Card>
          <ServicesIcon src={Icon1} />
          {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
        </Card>
        <div>
          <Card>
            <ServicesIcon src={Icon2} />
            {/* <ServicesH2>Virtual offices</ServicesH2> */}
            {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
          </Card>
          <Card>
            <ServicesIcon src={Icon3} />
            {/* <ServicesH2>Premium Benefits</ServicesH2> */}
            {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </Card>
        </div>
        <Card>
          <ServicesIcon src={Icon4} />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </Card>
        <div>
          <Card>
            <ServicesIcon src={Icon5} />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </Card>
          <Card>
            <ServicesIcon src={Icon6} />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </Card>
        </div>

        <Card>
          <ServicesIcon src={Icon7} />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </Card>
        <div>
          <Card>
            <ServicesIcon src={Icon8} />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </Card>

          <Card>
            <ServicesIcon src={Icon9} />
            {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
          </Card>
        </div>
        <Card>
          <ServicesIcon src={Icon10} />
          {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
        </Card>
      </ServicesWrapper6>
      <br></br>
      <ServicesH1 style={{ fontSize: "2.5rem" }}>
        Historical Textiles 1750-1980
      </ServicesH1>

      {/* sixObj section */}
      <InfoContainer lightBg={sixObj.lightBg} id={sixObj.id}>
        <InfoWrapper>
          <InfoRow imgStart={sixObj.imgStart}>
            <Column1>
              <Heading lightText={sixObj.lightText}>{sixObj.headline}</Heading>
              <TextWrapper>
                <TopLine>{sixObj.topLine}</TopLine>
                <Subtitle
                  darkText={sixObj.darkText}
                  style={{ fontFamily: "myriad-pro" }}
                >
                  {sixObj.description}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImgWrap>
                  <Img
                    border="none"
                    style={{ width: "70%" }}
                    src={Icon1}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            <p
                              style={{
                                fontSize: "1rem",

                                marginTop: "30rem",
                                marginLeft: "12rem",
                                color: "white",
                              }}
                            >
                              Classic period Saltillo sarape, c. 1720–1860
                              Mexico Wool, cotton, and cochineal, and other
                              natural dyes <br></br>On loan from Arizona History
                              Museum, 92.98 <br></br>AT-2020-15-1
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "60%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "80%", alignItems: "right" }}>
                              <img
                                src={Icon1}
                                style={{ width: "80%" }}
                                alt="Developer"
                              />
                            </div>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                    alt=""
                  />
                  <Subtitle
                    darkText={sixObj.darkText}
                    style={{ fontFamily: "myriad-pro" }}
                  >
                    {sixObj.imgdesc2}
                  </Subtitle>
                </ImgWrap>
                {/* Second column of images */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ImgWrap>
                    <Img
                      src={Icon2}
                      style={{ width: "70%" }}
                      onClick={() => {
                        setContent(
                          <div
                            className="content"
                            style={{ alignItems: "right" }}
                          >
                            <div
                              className="text"
                              style={{ width: "50%", marginLeft: "6rem" }}
                            >
                              <p
                                style={{
                                  fontSize: "1rem",
                                  marginTop: "35rem",
                                  marginLeft: "11.5rem",
                                  color: "white",
                                }}
                              >
                                Classic period Saltillo sarape, c. 1720–1860
                                Mexico Wool, cotton, and indigo dye <br></br>On
                                loan from Tom Kieft <br></br>AT-2020-13
                              </p>
                            </div>
                            <div
                              style={{
                                height: "60%",
                                width: "70%",
                                alignItems: "right",
                              }}
                            >
                              <div
                                style={{ width: "80%", alignItems: "right" }}
                              >
                                <img
                                  src={Icon2}
                                  style={{ width: "80%" }}
                                  alt="Developer"
                                />
                              </div>
                            </div>
                          </div>
                        );
                        openModal();
                      }}
                    />
                  </ImgWrap>
                  <ImgWrap>
                    <Img
                      src={Icon3}
                      style={{ width: "70%" }}
                      onClick={() => {
                        setContent(
                          <div
                            className="content"
                            style={{ alignItems: "right" }}
                          >
                            <div
                              className="text"
                              style={{ width: "50%", marginLeft: "6rem" }}
                            >
                              <p
                                style={{
                                  fontSize: "1rem",
                                  marginTop: "30rem",
                                  marginLeft: "12rem",
                                  color: "white",
                                }}
                              >
                                Classic period Saltillo sarape, c. 1720–1860
                                Mexico
                                <br />
                                Wool, cotton, and cochineal, indigo, and other
                                natural dyes
                                <br />
                                Gift of Katherine and Alexandrine McEwen
                                <br />
                                E-1642
                              </p>
                            </div>
                            <div
                              style={{
                                height: "60%",
                                width: "70%",
                                alignItems: "right",
                              }}
                            >
                              <div
                                style={{ width: "80%", alignItems: "right" }}
                              >
                                <img
                                  src={Icon3}
                                  style={{ width: "80%" }}
                                  alt="Developer"
                                />
                              </div>
                            </div>
                          </div>
                        );
                        openModal();
                      }}
                    />
                  </ImgWrap>
                </div>
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      {/* sixObjOne section */}
      <InfoContainer
        lightBg={sixObjOne.lightBg}
        id={sixObjOne.id}
        style={{ maxWidth: width > 768 ? "auto" : "600px" }}
      >
        <InfoWrapper>
          <InfoRow imgStart={sixObjOne.imgStart}>
            <Column1>
              <Heading lightText={sixObjOne.lightText}>
                {sixObjOne.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sixObjOne.topLine}</TopLine>

                <Subtitle
                  darkText={sixObjOne.darkText}
                  style={{ fontFamily: "myriad-pro" }}
                >
                  {sixObjOne.description}
                </Subtitle>
                <Subtitle
                  darkText={sixObjOne.darkText}
                  style={{ fontFamily: "myriad-pro" }}
                >
                  {sixObjOne.description2}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2 style={{ height: "900px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "80%",
                    height: "100%",
                  }}
                >
                  <Img
                    style={{ width: "80%" }}
                    src={Icon4}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            <div
                              style={{
                                fontSize: "1rem",
                                fontFamily: "myriad-pro",
                              }}
                            >
                              Notice how, in this Transition period sarape, the
                              designs have become increasingly intricate and how
                              the centralized diamond design has multiplied, as
                              compared to the sarapes made in the Classic
                              period.
                            </div>
                            <p
                              style={{
                                fontSize: "1rem",
                                color: "white",
                                marginTop: "25rem",
                                marginLeft: "13rem",
                              }}
                            >
                              Post-Classic period sarape with concentric
                              diamonds, c. 1870
                              <br />
                              Wool, cotton, and natural and synthetic dyes
                              <br />
                              Gift of Arizona Archaelogical and Historical
                              Society
                              <br />
                              19766
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "75%", alignItems: "right" }}>
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
                  <Img
                    style={{ width: "80%" }}
                    src={Icon5}
                    onClick={() => {
                      setContent(
                        <div className="content">
                          <div className="text" style={{ marginLeft: "6rem" }}>
                            <p
                              style={{
                                fontSize: "1rem",
                                color: "white",
                                marginRight: "1rem",
                                marginBottom: "2rem",
                              }}
                            >
                              Notice the diamond elements within the central
                              diamond. This well-worn weaving’s rich blue tones
                              come from dye made from the indigo plant.
                              <br></br>
                            </p>
                            <div style={{ width: "65%", alignItems: "right" }}>
                              <div>
                                <img
                                  src={img2}
                                  style={{ width: "70%" }}
                                  alt="Developer"
                                />
                              </div>
                              <div
                                style={{
                                  color: "#fff",
                                  fontFamily: "myriad-pro",
                                  fontSize: "1rem",
                                }}
                              >
                                Mexican saddle C. 1860–1900On loan from Michael
                                D. Higgins AT-2020-14-1
                              </div>
                              <div>
                                <img
                                  src={img3}
                                  style={{ width: "70%", marginTop: "2rem" }}
                                  alt="Developer"
                                />
                              </div>
                              <div
                                style={{
                                  color: "#fff",
                                  fontFamily: "myriad-pro",
                                  fontSize: "1rem",
                                }}
                              >
                                Photographer unknown Published by Gevaey for
                                FotoMex, c. 1910 Collection of Tom Kieft
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              alignItems: "right",
                            }}
                          >
                            <img
                              src={Icon5}
                              style={{
                                width: "70%",
                                height: "80%",
                                marginTop: "2rem",
                              }}
                              alt="Developer"
                            />

                            <p
                              style={{
                                fontSize: "1rem",
                                color: "white",
                                marginLeft: "1rem",
                                marginRight: "5rem",
                              }}
                            >
                              Post-Classic period sarape with concentric
                              diamonds, <br />
                              c. 1870
                              <br />
                              Wool, cotton, and indigo and possibly synthetic
                              dyes
                              <br />
                              12504
                            </p>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <Img
                    style={{ width: "80%" }}
                    src={Icon6}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            {/* <h2>John Doe</h2> */}

                            <div
                              style={{
                                fontSize: "1rem",
                                fontFamily: "myriad-pro",
                              }}
                            >
                              Notice the lavishly decorated neck-slit{" "}
                              <i>(bocamanga),</i> enabling this textile to be
                              worn as a poncho.
                            </div>
                            <p
                              style={{
                                fontSize: "1rem",
                                marginTop: "28rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Post-Classic period Saltillo sarape, c. 1870
                              <br />
                              Wool, cotton, velvet, silver, and synthetic dyes
                              <br />
                              On loan from Arizona History Museum, 86.60.19
                              <br />
                              AT-2020-15-2
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "75%", alignItems: "right" }}>
                              <img
                                src={Icon6}
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
                  <Img
                    style={{ width: "80%" }}
                    src={Icon7}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            <div
                              style={{
                                fontSize: "1rem",
                                fontFamily: "myriad-pro",
                              }}
                            >
                              Demand for Saltillo sarapes spread throughout the
                              world in the 1800s. European entrepreneurs,
                              capitalizing on the popularity and high monetary
                              value of these pieces, printed Saltillo sarape
                              designs on woven textiles. Sold in Europe and
                              Mexico, these less-expensive, Saltillo-inspired
                              textiles were popular with tourists and those who
                              couldn’t afford a real Saltillo sarape.
                            </div>
                            <p
                              style={{
                                fontSize: "1rem",
                                marginTop: "20rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Textile printed with Saltillo sarape design
                              <br />
                              C. 1870-1900
                              <br />
                              Made in Germany or Austria
                              <br />
                              Gift of Eman L. Beck estate
                              <br />
                              E-4735
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "75%", alignItems: "right" }}>
                              <img
                                src={Icon7}
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
                </div>
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg={sixObjThree.lightBg} id={sixObjThree.id}>
        <InfoWrapper>
          <InfoRow imgStart={sixObjThree.imgStart}>
            <Column1>
              <Heading lightText={sixObjThree.lightText}>
                {sixObjThree.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sixObjThree.topLine}</TopLine>

                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1.5rem",
                  }}
                >
                  {sixObjThree.description}
                </Subtitle>
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1.5rem",
                  }}
                >
                  {sixObjThree.description2}
                </Subtitle>
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1.5rem",
                  }}
                >
                  {sixObjThree.description3}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={sixObjThree.smallImg}
                  src={sixObjThree.img3}
                  alt=""
                />
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1.5rem",
                  }}
                >
                  {sixObjThree.imgdesc4}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1rem",
                  }}
                >
                  {sixObjThree.imgdesc}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={sixObjThree.smallImg}
                  src={sixObjThree.img}
                  alt=""
                />
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1rem",
                  }}
                >
                  {sixObjThree.imgdesc2}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={sixObjThree.smallImg}
                  src={sixObjThree.img2}
                  alt=""
                />
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "myriad-pro",
                    fontSize: "1rem",
                  }}
                >
                  {sixObjThree.imgdesc3}
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow imgStart={sixObj.imgStart} style={{ marginTop: "-10rem" }}>
            <div class="row1">
              <div
                class="column11"
                style={{
                  width: "33.3%",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                }}
              >
                <ImgWrap>
                  <Img
                    border="none"
                    style={{ width: "70%" }}
                    src={Icon8}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            <p
                              style={{
                                fontSize: "1rem",

                                marginTop: "30rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Oaxacan sarape, c. 1900-1920<br></br>
                              Wool, natural and synthetic dyes. <br></br> On
                              loan from Tom Kieft <br></br>AT-2020-13-2
                            </p>
                          </div>
                          <div
                            style={{
                              height: "70%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "90%", alignItems: "right" }}>
                              <img
                                src={Icon8}
                                style={{ width: "90%" }}
                                alt="Developer"
                              />
                            </div>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                    alt=""
                  />

                  <Subtitle
                    darkText={sixObj.darkText}
                    style={{ fontFamily: "myriad-pro" }}
                  >
                    {sixObj.imgdesc2}
                  </Subtitle>
                </ImgWrap>
              </div>
              <div class="column12" style={{ marginTop: "2rem" }}>
                {/* Second column of images */}
                <ImgWrap>
                  <Img
                    src={Icon9}
                    style={{ width: "70%" }}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            <p
                              style={{
                                fontSize: "1rem",
                                color: "white",
                              }}
                            >
                              This sarape's repeated diamond motifs may have
                              been influenced by the geometric designs on the
                              walls of the ruins at Mitla in Oaxaca.
                            </p>
                            <p
                              style={{
                                fontSize: "1rem",
                                marginTop: "30rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Oaxacan sarape, c. 1920-1940<br></br> Wool,
                              natural and synthetic dyes<br></br> On loan from
                              Michael D. Higgins<br></br> AT-2020-14-2
                            </p>
                          </div>
                          <div
                            style={{
                              height: "70%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "90%", alignItems: "right" }}>
                              <img
                                src={Icon9}
                                style={{ width: "90%" }}
                                alt="Developer"
                              />
                            </div>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                  />
                </ImgWrap>
              </div>
              <div
                class="column13"
                style={{ marginTop: "-25rem", marginLeft: "5rem" }}
              >
                <ImgWrap>
                  <Img
                    src={Icon10}
                    style={{ width: "70%" }}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%", marginLeft: "6rem" }}
                          >
                            <p
                              style={{
                                fontSize: "1rem",
                                color: "white",
                              }}
                            >
                              This weaving, from the 1980s, is a version of a
                              Classic period Saltillo sarape woven by a
                              Tlaxcalan weaver. Tlaxcalans continue to weave
                              sarapes using Classic period design elements
                              because they are still sought after by commercial
                              buyers.
                            </p>
                            <p
                              style={{
                                fontSize: "1rem",
                                marginTop: "30rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Tlaxcalan sarape, c. 1980<br></br>
                              Tlaxcalan, Mexico Wool, natural and synthetic dyes
                              <br></br>
                              1980-2-53
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "80%", alignItems: "right" }}>
                              <img
                                src={Icon10}
                                style={{ width: "80%" }}
                                alt="Developer"
                              />
                            </div>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                  />
                </ImgWrap>
              </div>
            </div>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      {/* <HistoricalSection {...sixObj} /> */}
      {/* <HistoricalSection {...sixObjOne} /> */}
      {/* <HistoricalSection {...sixObjTwo} /> */}
    </ServicesContainer>
  );
};

export default Services;
