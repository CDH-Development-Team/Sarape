import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalVideo from 'react-modal-video'
import Modal from "react-modal";

// import React, { useState } from "react";
import "./styles.css";
import vocab from "../../src/images/vocab.png"
import Icon1 from "../images/dyeing1.png";
import Icon2 from "../images/dyeing2.png";
import Icon3 from "../images/dyeing3.png";
import Icon4 from "../images/dyeing4.png";
import Icon5 from "../images/dyeing5.png";
import Icon6 from "../images/dyeing6.png";
import Icon7 from "../images/dyeing7.png";
import Icon8 from "../images/dyeing8.png";
import Icon9 from "../images/dyeing9.png";
import Icon10 from "../images/dyeing10.png";
import Icon11 from "../images/dyeing11.png";
import Icon21 from "../images/color10.png";

import Color1 from "../images/section 2/color1.png";

import Color4 from "../images/color4.png";
import Color5 from "../images/color5.png";
import Color8 from "../images/color8.png";
import Color11 from "../images/color11.png";
import close from "../images/close.png";

import {
  GeographyContainer,
} from "../components/Geography/geographyElements.js";
// import Color1 from '../images/section 2/color1.png'
import "../components/Geography/geography.css";
import useWindowDimensions from "../components/Geography/dimensions";
import {
  DyeMosaicParent,
  DyeMosaic1,
  DyeMosaic2,
  DyeMosaic3,
  DyeMosaic4,
  DyeMosaic5,
  DyeMosaic6,
  DyeMosaic7,
  DyeMosaic8,
  DyeMosaic9,
  DyeMosaic10,
  DyeMosaic11,
  DyeMosaic12,
  DyeMosaic13,
  DyeMosaic14,
  DyeMosaic15,
  DyeMosaic16,
  DyeMosaic17,
  DyeMosaic18,
  DyeMosaic19,
  DyeMosaic20,
} from "../components/Geography/geographyElements.js";

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

const DyeingPage = () => {
  const [modalIsOpen, setIsOpenM] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function openModal() {
    setIsOpenM(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const [vidOpen, setVidOpen] = useState(false);
  function closeModal() {
    setIsOpenM(false);
  }
  const [content, setContent] = React.useState(null);

  const { width } = useWindowDimensions();
  return (
    <React.Fragment>
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <GeographyContainer>
        <DyeMosaicParent
          height={((width - (width % 16)) / 16) * 8}
          width={width - (width % 16)}
          style={{marginTop:"1rem"}}
        >
          <DyeMosaic1 className="mosaic">
            <img
              src={Icon1}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column2">
                        <div
                          style={{
                            marginLeft: "5rem",
                            marginTop: "5rem",
                            fontSize: "1.5rem",
                            fontFamily: "",
                          }}
                        >
                          Blue dye hues are made from the indigo plant (
                          <i>Indigofera tinctoria</i>), also called añil in
                          Spanish. It is one of the more complicated dyes to
                          prepare. For the Porfirio Gutiérrez studio, we usually
                          buy dehydrated indigo cake from the last few families
                          in Oaxaca who grow and process the indigo plants. We
                          grind the indigo and put it in a clay pot with water
                          and various ingredients. For indigo to produce the
                          blue color, it needs a high (basic or alkaline) pH
                          which is achieved by adding wood ash. We also add{" "}
                          <i>muicle (Justiciar spicigera)</i>, a reduction
                          agent. This liquid is left to ferment for at least
                          five days before it is ready to dye the yarn various
                          shades of blue.
                        </div>
                        <div
                          style={{
                            marginLeft: "25rem",
                            marginTop: "5rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Juana Gutiérrez Contreras grinds indigo into a powder
                          to make the dye.<br></br>Joe Coca, photographer, 2019
                        </div>
                      </div>
                      <div className="column2">
                        <img
                          src={Icon1}
                          alt="Developer"
                          style={{ width: "60%", marginLeft: "20%" }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic1>
          <DyeMosaic2 className="mosaic">
            <img
              src={Icon2}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column2">
                        <div
                          style={{
                            marginLeft: "5rem",
                            marginTop: "7rem",
                            fontSize: "1.5rem",
                            fontFamily: "Lucida",
                          }}
                        >
                          “The dye plants that come from the earth are the soul
                          of my artwork.” <br></br>
                          <p
                            style={{
                              fontFamily: "Lucida",
                              paddingLeft: "20rem",
                              marginTop: "2rem",
                            }}
                          >
                            Porfirio Gutierrez
                          </p>
                        </div>
                        <div
                          style={{
                            marginLeft: "28rem",
                            marginTop: "7rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Indigo stained hands. <br></br>Nikhol Esterás,
                          photographer, 2017
                        </div>
                      </div>
                      <div className="column2">
                        <img
                          src={Icon2}
                          alt="Developer"
                          style={{ width: "80%", marginTop: "5rem", marginLeft:"2rem"}}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic2>
          <DyeMosaic3 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic3>

          <DyeMosaic4 className="mosaic">
            <img
              src={Icon6}
              height={"100%"}
              alt=""
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column6">
                        <div
                          style={{
                            marginLeft: "5rem",
                            marginTop: "2rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Drying yarn.<br></br> Soraya Matos, photographer, 2018
                        </div>
                      </div>
                      <div className="column7">
                        <img
                          src={Icon6}
                          alt="Developer"
                          style={{
                            width: "90%",
                            marginTop: "2rem",
                            marginRight: "10rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic4>

          <DyeMosaic5 className="mosaic">
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic5>

          <DyeMosaic6 className="mosaic">
            <img
              src={Icon3}
              alt=""
              style={{ width: "100%", marginTop: "4.2rem" }}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column5">
                        <div
                          style={{
                            marginTop: "6rem",
                            fontSize: "1.5rem",
                            fontFamily: "Lucida",
                          }}
                        >
                          “Through my practice of working with natural dyes, my
                          life is shaped by my values.” <br></br>
                        </div>
                        <p
                          style={{
                            fontFamily: "Lucida",
                            fontSize: "1.5rem",
                            paddingLeft: "15rem",
                            marginTop: "2rem",
                          }}
                        >
                          Porfirio Gutierrez
                        </p>
                        <div
                          style={{
                            marginLeft: "22rem",
                            marginTop: "10rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Porfirio Gutiérrez with dyed skeins of yarn.<br></br>{" "}
                          Javier Lazo Gutiérrez, photographer, 2019{" "}
                        </div>
                      </div>
                      <div className="column5">
                        <img
                          src={Icon3}
                          alt="Developer"
                          style={{
                            width: "80%",
                            marginTop: "5rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic6>

          <DyeMosaic7 className="mosaic">
            <img src={Color4} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic7>
          <DyeMosaic8 className="mosaic">
            <img
              src={Icon9}
              height={"100%"}
              alt=""
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content1">
                    <div className="row" style={{}}>
                      <div className="column5">
                        <p
                          style={{
                            fontSize: "1.25rem",
                            fontFamily: "",
                            marginTop: "2rem"
                          }}
                        >
                          I inherited the deep artistic traditions and our rich
                          cultural identity from our ancestors, the Zapotec
                          civilization. In my family, we learned our weaving and
                          natural-dyeing practices at a very early age and
                          forged our identities within that artistic expression.
                          Our lives are shaped by our values, which are
                          inherently linked to our practice of working with
                          natural dyes and weaving. <br></br>
                          <br></br>When born into a tradition, it is expected
                          that one will follow that path. I do not work with
                          natural dyes simply because I was born into the
                          tradition, or because there is money to be made, or
                          because it is a trend.I work with natural dyes because
                          I discovered my gift and calling within our
                          traditional practice and developed a profound
                          connection with Mother Earth.
                          <br></br>
                          <br></br>Through my teaching, I aim to bring awareness
                          of traditional wisdom and values. It is extremely
                          important for the students to understand the meaning
                          and responsibility of working with natural dyes
                          according to our cultural values and beliefs. This is
                          the first step to eventually creating colors. My goal
                          is to confront the disconnect that exists between the
                          object and the culture that nurtures its creation.{" "}
                        </p>
                        <div
                          className="quoteDiv"
                          style={{
                            color: "#fff",
                            fontSize: "1rem",
                            marginLeft: "15rem",
                          }}
                        >
                          Juana Gutiérrez Contreras pulling yarn from the dye
                          pot. Cochineal produced the red color.<br></br>Joe
                          Coca, photographer, 2019
                        </div>
                      </div>

                      <div className="column5">
                        <img
                          src={Icon9}
                          alt="Developer"
                          style={{ width: "90%", marginTop:"2rem"}}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic8>
          <DyeMosaic9 className="mosaic">
            <img src={Color11} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic9>
          <DyeMosaic10 className="mosaic">
            <img
              src={Icon7}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column2">
                        <div
                          style={{
                            marginLeft: "2rem",
                            marginTop: "7rem",
                            fontSize: "1.5rem",
                            fontFamily: "",
                          }}
                        >
                          Spanish colonizers saw beauty, as well as economic
                          potential, in the red dye produced from the cochineal
                          insect. This colorant, which creates many hues, had an
                          immediate appeal in Europe. The export of cochineal
                          from Mexico became a huge economic enterprise for the
                          Spaniards. They established cochineal-production
                          farms, called nopalries, and this native insect dye
                          became the second most valuable export from the
                          Americas. Oaxaca was one of the most important centers
                          for its production.<br></br>
                          <br></br> The success of Spain’s cochineal market
                          aroused intense jealousy among other European
                          countries, which sent spies to discover the dye’s
                          source. Eventually the cactus pads, with cochineal
                          insects attached, were smuggled out of Mexico. By the
                          time of Mexico’s war for independence (1810–1821), the
                          country had lost its monopoly on the cochineal trade.
                          However, it remained a part of Mexico’s economy until
                          the 1860s, when new synthetic dyes became available.
                        </div>
                        <div
                          style={{
                            fontSize: "1rem",
                            marginLeft: "15rem",
                            marginRight: "3rem",
                            marginTop: "2rem",
                            fontFamily: "",
                            color: "#fff",
                          }}
                        >
                          Cochineal production at the town of Guaspaltepeque,
                          Oaxaca<br></br>From Dr. William Houston’s letter to
                          Sir Han Sloane, December 9, 1730 <br></br>Royal
                          Society Register Book Original, RS.9825, Vol. 16,
                          1731–1732
                          <br></br>The Royal Society
                        </div>
                      </div>
                      <div className="column2">
                        <img
                          src={Icon7}
                          alt="Developer"
                          style={{ width: "90%", marginTop: "10rem" }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic10>
          <DyeMosaic11 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic11>

          <DyeMosaic12 className="mosaic">
            <img
              src={Icon4}
              height={"100%"}
              alt=""
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column5">
                        <div
                          style={{
                            fontSize: "1.25rem",
                            marginLeft: "2rem",
                            marginRight: "2rem",
                            marginTop: "2rem",
                            fontFamily: "",
                          }}
                        >
                          Cochineal dye has been widely used in Saltillo sarapes
                          to create brilliant red weavings, in many different
                          hues, that are considered some of the finest textiles
                          in the world. The dye is derived from the dried bodies
                          of tiny female cochineal (<i>Dactylopius coccus</i>)
                          insects that live and feed on the nopal (prickly pear
                          cactus).
                          <br></br>
                          <br></br> Cochineal has been cultivated in Mexico,
                          Central America, and South America for thousands of
                          years. In ancient Mexico, it was used not only in the
                          arts but also in medicine and ceremonies, especially
                          in burial rites. The Aztecs demanded cochineal as
                          tribute from the many areas they ruled over, including
                          Mitla and Monte Albán. Spaniards first encountered it
                          in Aztec markets, compressed into bars, either pure or
                          mixed with chalk.<br></br>
                          <br></br> The red and burgundy from cochineal dyes are
                          extremely important, symbolic colors in the Zapotec
                          ceremonial procession that takes place during various
                          celebrations. In the community procession, women wear
                          an enredo, a red/burgundy textile wrapped around the
                          waist like a skirt and held with a sash.{" "}
                        </div>
                        <div
                          style={{
                            marginLeft: "15rem",
                            marginTop: "2rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Indigenous man using a deer’s tail to scrape cochineal
                          off of a nopal pad.<br></br>
                          <br></br>
                          <i>
                            Memoria sobre la Naturaleza, Cultivo, y Beneficio de
                            la Grana
                          </i>
                          , <br></br>Mexico City, 1777<br></br> Photograph of
                          Ayer Ms. 1031, plate 7<br></br>
                          Edward E. Ayer Manuscript Collection<br></br>Newberry
                          Library, Chicago
                        </div>
                      </div>
                      <div className="column5">
                        <img
                          src={Icon4}
                          alt="Developer"
                          style={{width: "65%", marginLeft:"8rem"}}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic12>
          <DyeMosaic13 className="mosaic">
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic13>
          <DyeMosaic14 className="mosaic">
            <img
              src={Icon10}
              height={"100%"}
              alt=""
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column2">
                        <div
                          style={{
                            marginLeft: "2rem",
                            marginRight: "2rem",
                            marginTop: "2rem",
                            fontSize: "1.25rem",
                            fontFamily: "",
                          }}
                        >
                          The life cycles of the cochineal insect and the pad of
                          the nopal (prickly pear) are both approximately three
                          to four months. In each cycle, new nopal pads—
                          infested with cochineal— must be collected and then
                          and hung up. About 1,000 nopal pads are required to
                          harvest 1 kilo (2.2 pounds) of cochineal to use for
                          dye. <br></br>
                          <br></br>At my studio, we farm only a small amount of
                          cactus and produce a small number of cochineal
                          insects. This is not enough for our usage of about 30
                          kilos (66 pounds) a year. In order to produce this
                          much, we work collaboratively with other families who
                          specialize in cultivating cochineal. They devote their
                          lives to this practice. <br></br>
                          <br></br>As we preserve and sustain our art form, we
                          are also honored to be contributing to many others’
                          livelihoods and the preservation of their traditional
                          practices as well. While farming cactus and cochineal
                          are extremely labor intensive and complex, I feel very
                          blessed and honored to be part of this legacy.
                        </div>
                        <div
                          style={{
                            marginLeft: "19rem",
                            marginTop: "2rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Front and back views of male and female cochineal
                          insects José Antonio de Alzate y Ramirez<br></br>
                          <i>
                            Memoria sobre la naturaleza, Cultivo, y Beneficio de
                            la Grana
                          </i>
                          ,<br></br> Mexico City, 1777 <br></br>Edward E. Ayer
                          Manuscript Collection, Ayers Ms. 1031, plate 1
                          <br></br>Newberry Library, Chicago
                        </div>
                      </div>
                      <div className="column2">
                        <img
                          src={Icon10}
                          alt="Developer"
                          style={{ width: "60%", marginLeft: "10rem" }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic14>
          <DyeMosaic15 className="mosaic">
            <img
              src={Color4}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent();
                openModal();
              }}
            ></img>
          </DyeMosaic15>
          <DyeMosaic16 className="mosaic">
            <img
              src={Icon8}
              height={"100%"}
              width={"100%"}
              alt=""
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column6">
                        <div></div>
                        <div
                          style={{
                            marginLeft: "15rem",
                            marginTop: "2rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Using a mano and metate, cochineal is crushed into a
                          fine powder. To make dye, it will be combined with
                          water and possibly other minerals.<br></br>
                          <br></br> Joe Coca, photographer, 2019
                        </div>
                      </div>
                      <div className="column7">
                        <img
                          src={Icon8}
                          alt="Developer"
                          style={{ width: "35%", marginLeft: "15rem", marginTop:"1rem" }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic16>
          <DyeMosaic17 className="mosaic">
            <img src={Icon21} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic17>
          <DyeMosaic18 className="mosaic">
            <img
              src={Icon5}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column2">
                          <div
                            style={{
                              marginLeft: "2rem",
                              marginRight: "2rem",
                              marginTop: "2rem",
                              fontSize: "1.25rem",
                              fontFamily: "",
                            }}
                          >
                            In the 1960s, our weaving tradition underwent a
                            major transformation when the commercial market
                            began to encourage the use of colors created from
                            chemical dyes, faster production, cheaper prices,
                            and repetitive designs. The demands of this market
                            caused many weavers to replace their traditional
                            practices with these new faster ways of making
                            textiles. This created a disconnect from our Zapotec
                            values and beliefs.<br></br>
                            <br></br>It can take up to five months for some
                            plants to mature or for trees to bear fruit, and for
                            insects to be ready to harvest. Collecting the
                            plant, dehydrating it, preparing the yarn, dyeing
                            the yarn, and the final washing can take about two
                            weeks. Creating colors from nature is labor
                            intensive and costly. That is what makes our artwork
                            extremely rare.<br></br>
                            <br></br> The commercial market calls the weavings
                            we traditionally used in everyday life and in
                            ceremonies “rugs.” Considering them simply
                            commodities inspired their mass production. To me,
                            this is an insult to our culture and to the great
                            master weavers and dyers before us. To me, our
                            weavings are art, a medium in which I can express my
                            concerns and narrate our deep, rich Zapotec culture.
                          </div>
                          <div
                          style={{
                          marginLeft: "2rem",
                          marginRight: "2rem",
                          marginTop: "2rem",
                          fontSize: "1.5rem",
                          fontFamily: "Lucida",
                          }}
                          >
                            “There is no true soul in a commercially produced
                            piece. It becomes a product. The weavers who adopted
                            these new ways of producing textiles lost touch with
                            our tradition. They are not honoring our ancestors
                            through their techniques and methods. It’s about the
                            way the whole piece is being created.” <br></br>
                            <br></br>{" "}
                            <p
                              style={{
                                paddingLeft: "18rem",
                                fontSize: "1.5rem",
                                fontFamily: "Lucida",
                              }}
                            >
                              Porfirio Gutiérrez
                            </p>
                          </div>
                        </div>
                        <div className="column2">
                          <img
                            src={Icon5}
                            alt="Developer"
                            style={{
                              width: "65%",
                              marginTop: "2rem",
                              marginLeft: "10%",
                            }}
                          />
                          <div
                            style={{
                              marginLeft: "4.5rem",
                              marginTop:"0.5rem",
                              fontSize: "1rem",
                              fontFamily: "",
                            }}
                          >
                            Dyeing with cochineal <br></br>Soraya Matos,
                            photographer,
                        </div>
                        </div>
                      </div>
                    </div>
                  );
                  openModal();
                }
              }
            ></img>
          </DyeMosaic18>
          <DyeMosaic19 className="mosaic">
            <img src={Color8} alt="" height={"100%"} width={"100%"}></img>
          </DyeMosaic19>
          <DyeMosaic20 className="mosaic">
            <img
              src={Icon11}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div className="column6">
                        <div
                          style={{
                            marginLeft: "5rem",
                            marginTop: "1rem",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Andrea Contreras, Porfirio’s mom, plucking tree moss
                          for dyeing. Hanging behind her are nopal pads on which
                          the cochineal insects feast. When they die, they will
                          be scraped off, dried, and then ground into a rich,
                          purple-red powder to be used as a dye.
                          <br></br>
                          <br></br>Javier Lazo Gutiérrez, photographer, 2016
                        </div>
                      </div>
                      <div className="column7">
                        <img
                          src={Icon11}
                          alt="Developer"
                          style={{ width: "80%", marginLeft: "10%" }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </DyeMosaic20>
        </DyeMosaicParent>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            backgroundColor: "#4a0033",
            padding: "3rem",
          }}
        >
          <div style={{ padding: "1rem" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                color: "#fff",
                position: "relative"
              }}
            >
              Natural Dyeing
              <React.Fragment>
			<ModalVideo channel='youtube' style={{fontFamily: "Myriad Pro Regular"}} autoplay isOpen={vidOpen} videoId="9mKZ7VtYBOk" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{marginLeft:"1rem", position: "absolute", top: "10%", height:"2rem", fontSize:'1.2rem'}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		</React.Fragment>
            </h1>
            <br />
            <div className="row">
              <div className="column">
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "",
                    padding: "0rem",
                  }}
                >
                  The natural-dye practice involves chemistry, spiritual
                  beliefs, and a deep understanding of the forces of nature. The
                  shades of color a plant gives can vary greatly depending on
                  where it was grown and whether the plant received enough water
                  for the season—which makes the hue a living imprint of that
                  particular season. This is how we know that nature is divine
                  and that the plants are alive, just like us. It can take a
                  lifetime to understand the depth of this practice.
                  <br></br>
                  <br></br>
                  The Zapotec have been coloring yarns with natural dyes for
                  thousands of years. However, this practice was threatened by
                  the introduction of synthetic dyes, which enabled weavers to
                  produce textiles more quickly for a growing commercial market.
                  Over time, many Zapotec villages abandoned the more
                  labor-intensive tradition of working with plants, minerals,
                  and insects.
                </p>
              </div>
              {width > 768 && (
                <>
                  <div className="column">
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "",
                        padding: "0rem",
                      }}
                    >
                      While less expensive and easier to use then natural dyes,
                      chemical dyes can also be highly toxic, particularly in
                      large amounts. They present a threat to the health of the
                      dyers who use them and to the environment when they are
                      disposed of in the ground or in water systems.<br></br>
                      <br></br>Today, only a few families in Teotitlán del Valle
                      continue the ancient tradition of producing and using
                      natural dyes. I am working to preserve this knowledge
                      through my studio’s work and by teaching others. By
                      reviving this tradition, my family and I are helping to
                      preserve Zapotec identity and the environment.
                    </p>
                  </div>
                  <div className="column">
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "",
                        padding: "0rem",
                      }}
                    ></p>
                  </div>
                </>
              )}
              {width <= 768 && (
                <>
                  <div className="column">
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "",
                        padding: "0rem",
                      }}
                    >
                      The Zapotec have been coloring yarns with natural dyes for
                      thousands of years. However, this practice was threatened
                      by the introduction of synthetic dyes, which enabled
                      weavers to produce textiles more quickly for a growing
                      commercial market. Over time, many Zapotec villages
                      abandoned the more labor-intensive tradition of working
                      with plants, minerals, and insects. While less expensive
                      and easier to use then natural dyes, chemical dyes can
                      also be highly toxic, particularly in large amounts. They
                      present a threat to the health of the dyers who use them
                      and to the environment when they are disposed of in the
                      ground or in water systems.
                    </p>
                  </div>
                  <div className="column">
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "",
                        padding: "0rem",
                      }}
                    >
                      Today, only a few families in Teotitlán del Valle continue
                      the ancient tradition of producing and using natural dyes.
                      I am working to preserve this knowledge through my
                      studio’s work and by teaching others. By reviving this
                      tradition, my family and I are helping to preserve Zapotec
                      identity and the environment.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <br/>
          <br/>
          <audio src="https://statemuseum.arizona.edu/sites/default/files/Words.mp3" autoplay controls controlsList="nodownload"></audio><p style={{fontSize:'1.5rem', marginLeft:'0.7vw'}}>Listen to Vocabulary</p>
          <br/>
          <br/>
          
          <img src={vocab} alt="" style={{width:'100%'}}></img>
        </div>

      </GeographyContainer>
    </React.Fragment>
  );
  // const [isOpen, setIsOpen] = useState(false);
};

export default DyeingPage;
