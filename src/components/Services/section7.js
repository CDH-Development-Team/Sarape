import Modal from "react-modal";
//styling of the modal itself
import styled from "styled-components";
import React, { useState } from "react";
import ModalVideo from 'react-modal-video'
import "./styles.css";
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
  ServicesWrapper7,
  ServicesIcon,
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
  const [vidOpen, setVidOpen] = useState(false);
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
  const { width } = useWindowDimensions();
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
      <ServicesWrapper7>
        <Card>
          <ServicesIcon src={Icon1} />
        </Card>
        <div>
          <Card>
            <ServicesIcon src={Icon2} />
          </Card>
          <Card>
            <ServicesIcon src={Icon3} />
          </Card>
        </div>
        <Card>
          <ServicesIcon src={Icon4} />
          
        </Card>
        <div>
          <Card>
            <ServicesIcon src={Icon5} />      
          </Card>
          <Card>
            <ServicesIcon src={Icon6} />
          </Card>
        </div>
        <Card>
          <ServicesIcon src={Icon7} />
        </Card>
        <Card>
          <ServicesIcon src={Icon8} />
        </Card>
      </ServicesWrapper7>
      <br></br>

      {/* sixObj section */}
      <InfoContainer lightBg={sevenObj.lightBg} id={sevenObj.id}>
        <InfoWrapper>
          <InfoRow imgStart={sevenObj.imgStart}>
            <Column1>
              <Heading lightText={sevenObj.lightText}>
                {sevenObj.headline}
              </Heading>
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="SedH0GmBYIM" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{height:"2rem", fontSize:"1.2rem"}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		</React.Fragment>
              <TextWrapper>
                <TopLine>{sevenObj.topLine}</TopLine>
                <Subtitle
                  darkText={sevenObj.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sevenObj.description}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              {/* Second column of images */}
              <div class="row">
                <div class="column1">
                  <Img
                    border="none"
                    smallImg={sevenObj.smallImg}
                    src={sevenObj.img}
                    alt=""
                  />
                  <Subtitle
                    darkText={sevenObj.darkText}
                    style={{ fontFamily: "" }}
                  >
                    {sevenObj.imgdesc2}
                  </Subtitle>
                </div>
                <Img
                  border="none"
                  smallImg={sevenObj.smallImg}
                  src={sevenObj.img2}
                  alt=""
                />
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      {/* sixObjOne section */}
      <InfoContainer
        lightBg={sevenObjOne.lightBg}
        id={sevenObjOne.id}
        style={{ maxWidth: width > 768 ? "auto" : "600px" }}
      >
        <InfoWrapper>
          <InfoRow imgStart={sevenObjOne.imgStart}>
            <Column1>
              <Heading lightText={sevenObjOne.lightText}>
                {sevenObjOne.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sevenObjOne.topLine}</TopLine>

                <Subtitle
                  darkText={sevenObjOne.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sevenObjOne.description}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjOne.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sevenObjOne.description2}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  marginTop: "6rem",
                }}
              >
                <Subtitle
                  darkText={sevenObjOne.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                    width: "85%",
                  }}
                >
                  {sevenObjOne.description}
                </Subtitle>
                <Img
                  border="none"
                  style={{
                    width: "85%",
                  }}
                  src={sevenObjOne.img}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjOne.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                    width: "85%",
                  }}
                >
                  {sevenObjOne.imgdesc2}
                </Subtitle>
                <Img
                  border="none"
                  style={{
                    width: "85%",
                  }}
                  src={sevenObjOne.img2}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjOne.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                    width: "85%",
                  }}
                >
                  {sevenObjOne.imgdesc3}
                </Subtitle>
              </div>
            </Column2>
          </InfoRow>
          <ImgWrap style={{ marginTop: "-20rem" }}>
            <Img
              border="none"
              style={{ width: "25%", marginLeft: "5rem" }}
              src={Icon1}
              onClick={() => {
                setContent(
                  <div className="content" style={{ alignItems: "right" }}>
                    <div
                      className="text"
                      style={{ width: "50%", marginLeft: "6rem" }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          marginTop: "5rem",
                          color: "white",
                        }}
                      >
                        Although the diamond may have been a traditional
                        Rarámuri motif, the design layout shows a definite
                        Saltillo sarape influence.
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",

                          marginTop: "25rem",
                          marginLeft: "10rem",
                          color: "white",
                        }}
                      >
                        Post-Classic period Saltillo sarape, c. 1870 <br></br>
                        Wool, cotton, and indigo and possibly synthetic dyes
                        <br></br>1250
                      </p>
                    </div>
                    <div
                      style={{
                        height: "60%",
                        width: "70%",
                        alignItems: "right",
                      }}
                    >
                      <div style={{ width: "90%", alignItems: "right" }}>
                        <img
                          src={Icon1}
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
          </ImgWrap>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer
        lightBg={sevenObjTwo.lightBg}
        id={sevenObjTwo.id}
        style={{ maxWidth: width > 768 ? "auto" : "600px" }}
      >
        <InfoWrapper>
          <InfoRow imgStart={sevenObjTwo.imgStart}>
            <Column1>
              <Heading lightText={sevenObjTwo.lightText}>
                {sevenObjTwo.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sevenObjTwo.topLine}</TopLine>

                <Subtitle
                  darkText={sevenObjTwo.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sevenObjTwo.description}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjTwo.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sevenObjTwo.description2}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjTwo.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sevenObjTwo.description3}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  marginTop: "6rem",
                }}
              >
                <Subtitle
                  darkText={sevenObjTwo.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                    width: "85%",
                  }}
                >
                  {sevenObjTwo.imgdesc}
                </Subtitle>
                <Img
                  border="none"
                  style={{
                    width: "85%",
                  }}
                  src={sevenObjTwo.img}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjTwo.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                    width: "85%",
                  }}
                >
                  {sevenObjTwo.imgdesc2}
                </Subtitle>
                <ImgWrap>
                  <Img
                    border="none"
                    style={{ width: "65%", marginLeft: "5rem" }}
                    src={Icon2}
                    className ='textile'
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
                                marginTop: "2rem",
                                color: "white",
                              }}
                            >
                              This early-1900s Mayo sarape has an unusually
                              large central diamond superimposed on a typical
                              Saltillo sarape design layout
                            </p>
                            <p
                              style={{
                                fontSize: "1rem",

                                marginTop: "25rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Mayo sarape, c. 1920 <br></br>Wool and indigo dye{" "}
                              <br></br>Gift of the University of Arizona
                              Foundation
                              <br></br>1980-29-1
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "85%", alignItems: "right" }}>
                              <img
                                src={Icon2}
                                style={{ width: "85%" }}
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
                </ImgWrap>
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg={sevenObjThree.lightBg} id={sevenObjThree.id}>
        <InfoWrapper>
          <InfoRow imgStart={sevenObjThree.imgStart}>
            <Column1>
              <Heading lightText={sevenObjThree.lightText}>
                {sevenObjThree.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sevenObjThree.topLine}</TopLine>

                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjThree.description}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjThree.description2}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjThree.description3}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={sevenObjThree.smallImg}
                  src={sevenObjThree.img3}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjThree.imgdesc4}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  {sevenObjThree.imgdesc}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={sevenObjThree.smallImg}
                  src={sevenObjThree.img}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  {sevenObjThree.imgdesc2}
                </Subtitle>
                <Img
                  border="none"
                  smallImg={sevenObjThree.smallImg}
                  src={sevenObjThree.img2}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  {sevenObjThree.imgdesc3}
                </Subtitle>
                <Img
                  border="none"
                  style={{ width: "55%", marginLeft: "5rem" }}
                  src={Icon3}
                  onClick={() => {
                    setContent(
                      <div className="content" style={{ alignItems: "right" }}>
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
                            Large, bold elements were common in Rio Grande
                            blanket designs. During the last quarter of the
                            1800s, in both New Mexico and Mexico, backgrounds of
                            Saltillo sarape designs became increasingly complex.
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",

                              marginTop: "22rem",
                              marginLeft: "10rem",
                              color: "white",
                            }}
                          >
                            Rio Grande blanket, c. 1890 <br></br>New MexicoWool,
                            cotton, and synthetic dyes <br></br>Gift of Mr. and
                            Mrs. William Serat, 1976 <br></br>1976-11-1
                          </p>
                        </div>
                        <div
                          style={{
                            height: "60%",
                            width: "70%",
                            alignItems: "right",
                          }}
                        >
                          <div style={{ width: "85%", alignItems: "right" }}>
                            <img
                              src={Icon3}
                              style={{ width: "85%" }}
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
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg={sevenObjFour.lightBg} id={sevenObjFour.id}>
        <InfoWrapper>
          <InfoRow imgStart={sevenObjFour.imgStart}>
            <Column1>
              <Heading lightText={sevenObjFour.lightText}>
                {sevenObjFour.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sevenObjFour.topLine}</TopLine>

                <Subtitle
                  darkText={sevenObjFour.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                    marginBottom: "7rem",
                  }}
                >
                  {sevenObjFour.description}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjFour.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjFour.description2}
                </Subtitle>
                <Img
                  border="none"
                  style={{
                    width: "65%",
                    marginLeft: "5rem",
                    marginTop: "-2rem",
                  }}
                  src={Icon4}
                  onClick={() => {
                    setContent(
                      <div className="content" style={{ alignItems: "right" }}>
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
                            This Chimayo blanket’s design shows a strong Mexican
                            Saltillo influence yet has a distinctive New Mexico
                            flair
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",

                              marginTop: "22rem",
                              marginLeft: "10rem",
                              color: "white",
                            }}
                          >
                            Chimayo blanket, c. 1920–1950<br></br> Wool, cotton,
                            and synthetic dyes<br></br>Gift of Mrs. Robert
                            Schuman Steinert, 1964 <br></br>E-610
                          </p>
                        </div>
                        <div
                          style={{
                            height: "60%",
                            width: "70%",
                            alignItems: "right",
                          }}
                        >
                          <div style={{ width: "85%", alignItems: "right" }}>
                            <img
                              src={Icon4}
                              style={{ width: "85%" }}
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
              </TextWrapper>
            </Column1>
            <Column2 style={{ marginLeft: "5rem" }}>
              <ImgWrap>
                <Img
                  border="none"
                  style={{ width: "50%", marginTop: "2rem" }}
                  src={sevenObjFour.img2}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjFour.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  Chris Ortega, seventh-generation weaver, at his loom <br></br>
                  Robert Ortega, photographer, 2020
                </Subtitle>
                <Subtitle
                  darkText={sevenObjFour.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjFour.description3}
                </Subtitle>
                <Img
                  border="none"
                  style={{ width: "50%" }}
                  src={sevenObjFour.img3}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjFour.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  Chimayo Weavers, Reyes Ortega at his loom <br></br>Laura
                  Gilpin, photographer, 1939 <br></br>Chimayo, NM <br></br>Amon
                  Carter Museum of American Art,<br></br> P1979.202.241, 1979
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg={sevenObjFive.lightBg} id={sevenObjFive.id}>
        <InfoWrapper>
          <div class="row">
            <div style={{ width: "55%", float: "left" }}>
              <Heading lightText={sevenObjFive.lightText}>
                {sevenObjFive.headline}
              </Heading>
              <TopLine>{sevenObjFive.topLine}</TopLine>

              <Subtitle
                darkText={sevenObjFive.darkText}
                style={{
                  fontFamily: "",
                  fontSize: "1.5rem",
                }}
              >
                {sevenObjFive.description}
              </Subtitle>
              <Subtitle
                darkText={sevenObjFive.darkText}
                style={{
                  fontFamily: "Lucida",
                  fontSize: "1.5rem",
                }}
              >
                {sevenObjFive.quote1}
              </Subtitle>
            </div>
            <div style={{ width: "40%", float: "right" }}>
              <ImgWrap>
                <Img
                  border="none"
                  style={{ width: "90%", marginTop: "5rem" }}
                  src={sevenObjFive.img}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjFive.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  Irvin Trujillo’s father, Jake Trujillo, taught weaving to Navy
                  sailors at Treasure Island, San Francisco, 1944. <br></br>
                  Photograph courtesy of Trujillo family
                </Subtitle>
                <Subtitle
                  darkText={sevenObjFive.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  {sevenObjFive.smallDesc}
                </Subtitle>
              </ImgWrap>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg={sevenObjSix.lightBg} id={sevenObjSix.id}>
        <InfoWrapper>
          <div class="row">
            <div style={{ width: "45%", float: "left" }}>
              <Heading lightText={sevenObjSix.lightText}>
                {sevenObjSix.headline}
              </Heading>
              <TextWrapper>
                <TopLine>{sevenObjSix.topLine}</TopLine>

                <Subtitle
                  darkText={sevenObjSix.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjSix.description}
                </Subtitle>
                <Subtitle
                  darkText={sevenObjSix.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sevenObjSix.description2}
                </Subtitle>
              </TextWrapper>
            </div>
            <div style={{ width: "50%", float: "right" }}>
              <ImgWrap>
                <Img
                  border="none"
                  style={{ width: "90%", marginTop: "10rem" }}
                  src={sevenObjSix.img}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjSix.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  A Navajo woman weaving on an upright, continuous-warp loom.
                  <br></br>The rug has a centralized diamond design on an open
                  field.
                </Subtitle>
                <Subtitle
                  darkText={sevenObjSix.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  Jesse Nusbaum, photographer, c. 1921–1931 <br></br>Denver
                  Public Library, N-338
                </Subtitle>
              </ImgWrap>
            </div>
          </div>
          <InfoRow imgStart={sevenObj.imgStart} style={{ marginTop: "-10rem" }}>
            <div class="row1">
              <div
                class="column11"
                style={{
                  width: "33.3%",
                  marginLeft: "2rem",
                  marginTop: "15rem",
                }}
              >
                <ImgWrap>
                  <Img
                    border="none"
                    style={{ width: "75%" }}
                    src={Icon5}
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
                              This textile was woven by a master artist who may
                              have been inspired by a Saltillo sarape, as it has
                              multiple diamond motifs. The weave is extremely
                              tight, a characteristic of Classic period sarapes,
                              and is dyed with cochineal and indigo. Military
                              men were among the first Americans to purchase
                              Navajo sarape
                            </p>
                            <p
                              style={{
                                fontSize: "1rem",

                                marginTop: "25rem",
                                marginLeft: "5rem",
                                color: "white",
                              }}
                            >
                              Navajo sarape with Saltillo influence, c. 1850
                              <br></br>
                              Wool, cotton, and cochineal and indigo dyes
                              <br></br>
                              Collected by Lieutenant John Sanford Mason,{" "}
                              <br></br>c. 1870 <br></br>Purchase from Major
                              Ennalls Waggaman, 1954 <br></br>E-2724
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
                                src={Icon5}
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
                </ImgWrap>
              </div>
              <div
                class="column12"
                style={{ marginTop: "5rem", marginRight: "5rem" }}
              >
                {/* Second column of images */}
                <ImgWrap>
                  <Img
                    src={Icon6}
                    style={{ width: "60%", marginLeft: "4rem" }}
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
                              This Navajo blanket is woven with commercial
                              pre-dyed Germantown yarns that were supplied to
                              Navajo weavers by traders.
                            </p>

                            <p
                              style={{
                                fontSize: "1rem",
                                marginTop: "25rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Navajo blanket, c. 1890 <br></br>Wool, cotton, and
                              synthetic dyes<br></br>Gift of the Estate of Julia
                              Howell Overshiner, 1970<br></br>E-8988
                            </p>
                          </div>
                          <div
                            style={{
                              height: "70%",
                              width: "70%",
                              alignItems: "right",
                            }}
                          >
                            <div style={{ width: "80%", alignItems: "right" }}>
                              <img
                                src={Icon6}
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
                    src={Icon7}
                    style={{ width: "90%" }}
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

                                marginTop: "5rem",
                                color: "white",
                              }}
                            >
                              This is a Third Phase Chief ’s blanket, a style
                              dating to the 1860s. While earlier versions were
                              made to be worn, later ones were created for the
                              tourist market and were more likely used as rugs
                              or hung on walls as artwork. The diamond motif is
                              abundant and centralized like a sarape
                            </p>
                            <p
                              style={{
                                fontSize: "1rem",
                                marginTop: "15rem",
                                marginLeft: "10rem",
                                color: "white",
                              }}
                            >
                              Navajo Third Phase Chief ’s blanket, c. 1927{" "}
                              <br></br>Wool, cotton, and synthetic dyes<br></br>
                              Lukachukai Mountains, AZ <br></br>Collected by E.
                              J. Hands, 1927<br></br>E-83
                            </p>
                          </div>
                          <div
                            style={{
                              height: "80%",
                              width: "80%",
                              alignItems: "right",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                alignItems: "right",
                                marginTop: "5rem",
                              }}
                            >
                              <img
                                src={Icon7}
                                style={{ width: "100%" }}
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
                style={{ marginTop: "-35rem", marginLeft: "7rem" }}
              >
                <ImgWrap>
                  <Img
                    src={Icon8}
                    style={{ width: "75%" }}
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
                                marginLeft: "5rem",
                                color: "white",
                              }}
                            >
                              Poncho sarape, 2015<br></br>Kathy Marianito{" "}
                              <br></br>Churro wool, cotton, cochineal and indigo
                              dyes<br></br>Purchased by ASM Friends of
                              Collections <br></br>2020-337-1
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
                                src={Icon8}
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
      <InfoContainer lightBg={sevenObjSeven.lightBg} id={sevenObjSeven.id}>
        <InfoWrapper>
          <div class="row">
            <div style={{ width: "55%", float: "left" }}>
              <Heading lightText={sevenObjSeven.lightText}>
                {sevenObjSeven.headline}
              </Heading>
              <TopLine>{sevenObjSeven.topLine}</TopLine>

              <Subtitle
                darkText={sevenObjSeven.darkText}
                style={{
                  fontFamily: "",
                  fontSize: "1.5rem",
                }}
              >
                {sevenObjSeven.description}
              </Subtitle>
              <ImgWrap style={{ marginLeft: "5rem" }}>
                <Img
                  border="none"
                  style={{ width: "50%", marginTop: "5rem" }}
                  src={sevenObjSeven.img3}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjSeven.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                    marginRight: "10rem",
                  }}
                >
                  At the 2015 Gallup Inter-Tribal Indian Ceremonial, Kathy
                  Marianito was awarded first place in the poncho weavings
                  category for this piece. Steve Getzwiller, Nizhoni Ranch
                  Gallery, photographer, 2015
                </Subtitle>
              </ImgWrap>
            </div>
            <div style={{ width: "40%", float: "right" }}>
              <ImgWrap>
                <Img
                  border="none"
                  style={{ width: "50%", marginTop: "20rem" }}
                  src={sevenObjSeven.img2}
                  alt=""
                />
                <Subtitle
                  darkText={sevenObjSeven.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1rem",
                  }}
                >
                  J.B. Moore,{" "}
                  <i>
                    The Catalogues of Fine Navajo <br></br>Blankets, Rugs,
                    Ceremonial Baskets,<br></br> Silverware, Jewelry & Curios
                  </i>
                  , 1903 and 1911, <br></br>Plate II
                </Subtitle>
              </ImgWrap>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
      {/* <HistoricalSection {...sixObj} /> */}
      {/* <HistoricalSection {...sixObjOne} /> */}
      {/* <HistoricalSection {...sixObjTwo} /> */}
    </ServicesContainer>
  );
};

export default Services;
