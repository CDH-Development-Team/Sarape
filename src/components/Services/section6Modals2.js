import Modal from "react-modal";
//styling of the modal itself
import styled from "styled-components";
import ModalVideo from 'react-modal-video'
import React, { useState } from "react";
import "./styles.css";

import {
  sixObj,
  sixObjOne,
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
import "./styles.css";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper6,
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
  const [vidOpen, setVidOpen] = useState(false);
  const [vidOpen2, setVidOpen2] = useState(false);
  const [vidOpen3, setVidOpen3] = useState(false);
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
      <ServicesWrapper6 style={{marginTop:"4rem"}}>
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
        <div>
          <Card>
            <ServicesIcon src={Icon8} />
          </Card>

          <Card>
            <ServicesIcon src={Icon9} />
          </Card>
        </div>
        <Card>
          <ServicesIcon src={Icon10} />
        </Card>
      </ServicesWrapper6>
      <br></br>
      <ServicesH1 style={{ fontSize: "4rem", marginLeft: "-50rem", marginTop:"3rem", marginBottom:"0rem", overflow: "visible" }}>
        Historical Textiles 1750-1980
      </ServicesH1>

      {/* sixObj section */}
      <InfoContainer lightBg={sixObj.lightBg} id={sixObj.id}>
        <InfoWrapper>
          <InfoRow imgStart={sixObj.imgStart}>
            <Column1>
              <Heading style={{position: "relative", overflow: "visible", marginTop:"-.5rem"}} lightText={sixObj.lightText}>{sixObj.headline}
              </Heading>
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="6ZHsiC7bLMI" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{height:"2rem", fontSize:"1.2rem"}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		</React.Fragment>
              <TextWrapper>
                <TopLine>{sixObj.topLine}</TopLine>
                <Subtitle
                  darkText={sixObj.darkText}
                  style={{ fontFamily: "" }}
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
                  <Img className="selector"
                    border="none"
                    style={{ width: "65%", height:"95%" }}
                    src={Icon1}
                    onClick={() => {
                      setContent(
                        <div
                          className="content"
                          style={{ alignItems: "right" }}
                        >
                          <div
                            className="text"
                            style={{ width: "50%"}}
                          >
                            <p
                              style={{
                                fontSize: "1rem",
                                marginLeft: "5rem",
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
                                style={{ width: "60%", marginLeft:"15rem" }}
                                alt="Classic period sarape"
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
                    style={{ fontFamily: "" }}
                  >
                    {sixObj.imgdesc2}
                  </Subtitle>
                </ImgWrap>
                {/* Second column of images */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ImgWrap>
                    <Img className="selector"
                      src={Icon2}
                      style={{ width: "65%", height:"95%"  }}
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
                                  style={{ width: "65%", marginLeft:"10rem" }}
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
                    <Img className="selector"
                      src={Icon3}
                      style={{ width: "65%", height:"95%" }}
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
                                style={{ width: "80%", marginLeft:"10rem", alignItems: "right" }}
                              >
                                <img
                                  src={Icon3}
                                  style={{ width: "65%" }}
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
              <Heading lightText={sixObjOne.lightText} style={{overflow:"hidden"}}>
                {sixObjOne.headline}
              </Heading>
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen2} videoId="-5AkIHdKZz4" onClose={() => setVidOpen2(false)} />

			<button className="btn-primary" style={{height:"2rem", fontSize:"1.2rem"}} onClick={()=> setVidOpen2(true)}>Listen to the Curator</button>
		</React.Fragment>
              <TextWrapper>
                <TopLine>{sixObjOne.topLine}</TopLine>

                <Subtitle
                  darkText={sixObjOne.darkText}
                  style={{ fontFamily: "" }}
                >
                  {sixObjOne.description}
                </Subtitle>
                <Subtitle
                  darkText={sixObjOne.darkText}
                  style={{ fontFamily: "" }}
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
                  <Img className="selector"
                    style={{  width: "65%", height:"95%" }}
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
                                fontSize: "1.5rem",
                                fontFamily: "",
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
                                marginTop: ".5rem",
                                marginLeft: "0rem",
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
                                style={{ width: "65%", marginLeft: "12rem"}}
                                alt="Developer"
                              />
                            </div>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                  />
                  <Img className="selector"
                    style={{ width: "65%", height:"95%" }}
                    src={Icon5}
                    onClick={() => {
                      setContent(
                        <div className="content">
                          <div className="text" style={{ marginLeft: "6rem" }}>
                            <p
                              style={{
                                fontSize: "1.25rem",
                                color: "white",
                                marginRight: "1rem",
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
                                  fontFamily: "",
                                  fontSize: "1rem",
                                }}
                              >
                                Mexican saddle C. 1860–1900<br/>On loan from Michael
                                D. Higgins AT-2020-14-1
                              </div>
                              <div>
                                <img
                                  src={img3}
                                  style={{ width: "75%", marginTop: "2rem" }}
                                  alt="Developer"
                                />
                              </div>
                              <div
                                style={{
                                  color: "#fff",
                                  fontFamily: "",
                                  fontSize: "1rem",
                                }}
                              >
                                Photographer unknown Published by Gevaey for
                                FotoMex,<br/>c. 1910 Collection of Tom Kieft
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
                                marginR: "5rem",
                                marginTop:"1rem"
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
                  <Img className="selector"
                    style={{ width: "65%", height:"95%" }}
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

                            <div
                              style={{
                                fontSize: "1.5rem",
                                fontFamily: "",
                                width:"100%"
                              }}
                            >
                              Notice the lavishly decorated neck-slit{" "}
                              <i>(bocamanga),</i> enabling this textile to be
                              worn as a poncho.
                            </div>
                            <p
                              style={{
                                fontSize: "1rem",
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
                                style={{ width: "65%", marginLeft: "12rem"}}
                                alt="Developer"
                              />
                            </div>
                          </div>
                        </div>
                      );
                      openModal();
                    }}
                  />
                  <Img className="selector"
                    style={{ width: "65%", height:"95%"  }}
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
                                fontFamily: "",
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
                                marginTop: "0.5rem",
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
                                style={{ width: "65%", marginLeft: "12rem"}}
                                alt="Post classic period Sarape"
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
              <Heading lightText={sixObjThree.lightText} style={{overflow:"hidden"}}>
                {sixObjThree.headline}
              </Heading>
              <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen3} videoId="LTqW0otP2wM" onClose={() => setVidOpen3(false)} />

			<button className="btn-primary" style={{height:"2rem", fontSize:"1.2rem"}} onClick={()=> setVidOpen3(true)}>Listen to the Curator</button>
		</React.Fragment>
              <TextWrapper>
                <TopLine>{sixObjThree.topLine}</TopLine>

                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sixObjThree.description}
                </Subtitle>
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "",
                    fontSize: "1.5rem",
                  }}
                >
                  {sixObjThree.description2}
                </Subtitle>
                <Subtitle
                  darkText={sixObjThree.darkText}
                  style={{
                    fontFamily: "",
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
                    fontFamily: "",
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
                    fontFamily: "",
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
                    fontFamily: "",
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
                    fontFamily: "",
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
                  marginLeft: "5rem",
                  marginTop: "5rem",
                }}
              >
                <ImgWrap>
                  <Img className="selector"
                    border="none"
                    style={{ width: "65%", marginLeft:"6rem" }}
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
                                style={{ width: "65%", marginLeft: "12rem"}}
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
                    style={{ fontFamily: "" }}
                  >
                    {sixObj.imgdesc2}
                  </Subtitle>
                </ImgWrap>
              </div>
              <div
                class="column12"
                style={{ marginTop: "5rem", marginRight: "5rem" }}
              >
                {/* Second column of images */}
                <ImgWrap>
                  <Img className="selector"
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
                                fontSize: "1.5rem",
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
                                marginTop: "0.5rem",
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
                                style={{ width: "65%", marginLeft: "12rem"}}
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
                style={{ marginTop: "-30rem", marginLeft: "7rem"}}
              >
                <ImgWrap>
                  <Img className="selector"
                    src={Icon10}
                    style={{ width: "50%", marginTop:"4rem" }}
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
                                fontSize: "1.5rem",
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
                                marginTop: "0.5rem",
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
                                style={{ width: "65%", marginLeft:"12rem" }}
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
    </ServicesContainer>
  );
};

export default Services;
