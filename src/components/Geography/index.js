import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./geography.css";

import Icon1 from "../../images/section 2/1.jpg";
import Icon2 from "../../images/section 2/2.png";
import close from "../../images/close.png";
import Icon3 from "../../images/section 2/3.png";
import Icon4 from "../../images/section 2/4.png";
import Icon5 from "../../images/section 2/5.png";
import Icon6 from "../../images/section 2/6.png";
import Icon7 from "../../images/section 2/7.png";
import Icon8 from "../../images/section 2/8.png";
import Icon9 from "../../images/section 2/9.png";
import Icon10 from "../../images/section 2/10.png";
import Icon11 from "../../images/section 2/11.png";
import Icon12 from "../../images/section 2/12.jpg";
import Icon13 from "../../images/section 2/13.jpg";
import Icon14 from "../../images/section 2/14.png";
import Color1 from "../../images/section 2/color1.png";

import Color4 from "../../images/color4.png";
import Color5 from "../../images/color5.png";
import Color8 from "../../images/color8.png";
import Color11 from "../../images/color11.png";
import headerImg from "../../images/section 2/header.jpg";

import {
  GeographyContainer,
  MosaicWrapper,
  MosaicImg,
  HeaderText,
  GeographyEntry,
  GeographyEntryText,
  GeographyEntryImg,
  GeographyEntryDescription,
  GeographyStatues,
  Statue,
  StatueImg,
} from "./geographyElements.js";
import {
  GeographyMosaicParent,
  GeographyMosaic1,
  GeographyMosaic2,
  GeographyMosaic3,
  GeographyMosaic4,
  GeographyMosaic5,
  GeographyMosaic6,
  GeographyMosaic7,
  GeographyMosaic8,
  GeographyMosaic9,
  GeographyMosaic10,
  GeographyMosaic11,
  GeographyMosaic12,
  GeographyMosaic13,
  GeographyMosaic14,
  GeographyMosaic15,
  GeographyMosaic16,
  GeographyMosaic17,
} from "./geographyElements.js";
import useWindowDimensions from "./dimensions";

const customStyles = {
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#4a0033",
    color: "#fff",
    overflow: "hidden",
  },
};

const Geography = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { height, width } = useWindowDimensions();
  const [content, setContent] = React.useState(null);
  return (
    <>
      <GeographyContainer>
        <GeographyMosaicParent
          height={((width - (width % 18)) / 18) * 8}
          width={width - (width % 18)}
        >
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
          <GeographyMosaic1 className={"mosaic"}>
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </GeographyMosaic1>

          <GeographyMosaic2 className={"mosaic"}>
            <img
              src={Icon2}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img src={Icon2} alt="" width={"100%"}></img>
                    </GeographyEntryImg>
                    <GeographyEntryText>
                      Tlaxcalan forces accompanied the Spaniards on
                      post-conquest explorations of northern Mexico. This scene
                      is from the 1522 exploration led by Cristóbal de Olid, one
                      of Cortés’s lieutenants.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        fontSize: "1rem",
                        marginTop: "-90px",
                        marginLeft: "145px",
                      }}
                    >
                      Entrance into Guadalajara
                      <br />
                      Homenaje á Cristóbal Colón: Antigüedades Méxicanas, Lienza
                      53.
                      <br /> Fray Angelico Chavez History Library <br />
                      New Mexico History Museum, 972MexH
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic2>

          <GeographyMosaic3 className={"mosaic"}>
            <img
              src={Icon14}
              alt=""
              width={"100%"}
              height={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <div
                      style={{
                        margin: "20px 40px 0px 50px",
                        width: "70%",
                        fontSize: "1.5rem",
                      }}
                    >
                      Ceramics like these are associated with Mitla, called in
                      Nahuatl Mictlán, meaning “place of the dead,” or
                      underworld, and in Zapotec, Lyobaa, meaning “place of
                      rest.” The ancient Zapotec religion was complex, with
                      prayers and offerings made to many different gods or
                      deities. Notice the sophisticated dress and adornment of
                      these figures.
                    </div>

                    <GeographyStatues>
                      <Statue>
                        <StatueImg>
                          <iframe
                            style={
                              ({ display: "block" },
                              { width: "auto" },
                              { height: "auto" },
                              { marginLeft: "-15%" })
                            }
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="fullscreen; autoplay; vr"
                            xr-spatial-tracking
                            execution-while-out-of-viewport
                            execution-while-not-rendered
                            web-share
                            src="https://sketchfab.com/models/6213003444c44bb2b019a37e7960be4a/embed"
                          ></iframe>
                        </StatueImg>
                        <div style={{ fontSize: "1rem" }}>
                          Zapotec pottery urn, possibly representing a king or a
                          god
                          <br /> Ceramic
                          <br /> Gift of Elsie Scales, c.1923-1938
                          <br /> Oaxaca, Mexico
                          <br /> 12878
                        </div>
                      </Statue>
                      <Statue>
                        <StatueImg>
                          <iframe
                            style={
                              ({ display: "block" },
                              { width: "auto" },
                              { height: "auto" },
                              { marginLeft: "-15%" })
                            }
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="fullscreen; autoplay; vr"
                            xr-spatial-tracking
                            execution-while-out-of-viewport
                            execution-while-not-rendered
                            web-share
                            src="https://sketchfab.com/models/c47b41ae58644ed3b8b3600315cd99d9/embed"
                          ></iframe>
                        </StatueImg>
                        <div style={{ fontSize: "1rem" }}>
                          Zapotec pottery urn, representing Cocijo, god of rain
                          and lightning
                          <br /> Ceramic
                          <br /> ASM Purchase in 1925
                          <br /> Oaxaca, Mexico
                          <br /> 13645
                        </div>
                      </Statue>
                      <Statue>
                        <StatueImg>
                          <iframe
                            style={
                              ({ display: "block" },
                              { width: "auto" },
                              { height: "auto" },
                              { marginLeft: "-15%" })
                            }
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="fullscreen; autoplay; vr"
                            xr-spatial-tracking
                            execution-while-out-of-viewport
                            execution-while-not-rendered
                            web-share
                            src="https://sketchfab.com/models/f5b8c28294dc45bab024fa9b2506c046/embed"
                          ></iframe>
                        </StatueImg>
                        <div style={{ fontSize: "1rem" }}>
                          Zapotec pottery urn, possibly representing a king
                          wearing a mask of Cocijo, god of rain and lightning
                          <br /> Ceramic
                          <br /> Collected on a University of Arizona
                          Expedition, 1924–1925
                          <br /> Oaxaca, Mexico
                          <br /> 5536
                        </div>
                      </Statue>
                    </GeographyStatues>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic3>

          <GeographyMosaic4 className={"mosaic"}>
            <img
              src={Icon6}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img
                        src={Icon6}
                        alt=""
                        style={{ marginTop: "70px", width: "100%" }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      Mitla, another capital of the early Zapotec civilization,
                      is known for the geometric designs covering many of its
                      buildings. These details inspired traditional Zapotec
                      weaving designs. Built about 1,600 years ago, Mitla was an
                      important Zapotec and Mixtec religious center until its
                      destruction by the Spaniards in 1553.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "300px",
                        marginTop: "-35px",
                        fontSize: "1rem",
                      }}
                    >
                      Mitla, Oaxaca, Mexico
                      <br /> Joel Carillet, photographer, 2018
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic4>

          <GeographyMosaic5 className={"mosaic"}>
            <img
              src={Icon7}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg>
                      <img
                        src={Icon7}
                        alt=""
                        style={{ marginTop: "50px", width: "100%" }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      Notice the architectural details carved into these ancient
                      walls at Mitla. Today, Zapotec weavers integrate a variety
                      of design details from Mitla’s buildings into their
                      textile designs.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "300px",
                        marginTop: "-55px",
                        fontSize: "1rem",
                      }}
                    >
                      Mitla, Oaxaca, Mexico
                      <br /> Alana Coghlan, photographer, 2013
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic5>

          <GeographyMosaic6 className={"mosaic"}>
            <img
              src={Icon1}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img
                        src={Icon1}
                        alt=""
                        style={{ marginTop: "60px", width: "100%" }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      La Malinche, a Nahua woman, interprets for Hernan Cortés
                      in a discussion with Tlaxcalans about forming an alliance
                      against the Aztecs. Notice the Tlaxcalans wearing textiles
                      draped like cloaks. These weavings may have influenced the
                      Saltillo sarape’s design and how it was worn.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "300px",
                        marginTop: "-75px",
                        fontSize: "1rem",
                      }}
                    >
                      Homenaje á Cristóbal Colón:
                      <br /> Antigüedades Méxicanas, Lienza 27.
                      <br /> Fray Angelico Chavez History Library <br />
                      New Mexico History Museum, 972MexH
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic6>

          <GeographyMosaic7 className={"mosaic"}>
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </GeographyMosaic7>

          <GeographyMosaic8 className={"mosaic"}>
            <img src={Color4} alt="" height={"100%"} width={"100%"}></img>
          </GeographyMosaic8>

          <GeographyMosaic9 className={"mosaic"}>
            <img
              src={Icon13}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img
                        src={Icon13}
                        alt=""
                        style={{
                          marginTop: "60px",
                          height: "100%",
                          width: "100%",
                        }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      By the early 1600s, the 1,500-mile-long northern trade
                      route, El Camino Real de Tierra Adentro, was established,
                      taking both Spanish and Indigenous Mexican influence into
                      what is today New Mexico. El Camino Real means the Royal
                      Road, sometimes referred to as the King’s Road because it
                      was controlled by the King of Spain or his
                      representatives. It connected the Spanish Colonial capital
                      at Mexico City to Ohkay Owingeh (the Pueblo of San Juan)
                      near Santa Fe, New Mexico. Thousands of settlers, along
                      with militia, friars, and priests, used this road for
                      colonization and commerce, which in turn helped carry the
                      Saltillo sarape northward.
                    </GeographyEntryText>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic9>

          <GeographyMosaic10 className={"mosaic"}>
            <img
              src={Icon3}
              alt=""
              style={{
                height: "100%",
                width: "100%",
              }}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img
                        src={Icon3}
                        alt=""
                        style={{ width: "100%", marginTop: "100px" }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      Monte Albán was the most important center of the Zapotec
                      civilization politically, economically, and culturally.
                      One of the oldest Mesoamerican cities, it was inhabited
                      for nearly 1,500 years by a succession of Olmecs,
                      Zapotecs, and Mixtecs until about 850 CE (1,270 years
                      ago).
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "300px",
                        marginTop: "-20px",
                        fontSize: "1rem",
                      }}
                    >
                      Monte Albán, Oaxaca, Mexico
                      <br /> Dana Danielson, photographer, 2013
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic10>

          <GeographyMosaic11 className={"mosaic"}>
            <img
              src={Icon4}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry wide={true}>
                    <GeographyEntryImg height={height} wide={true}>
                      <img
                        src={Icon4}
                        alt=""
                        style={{
                          width: "65%",
                          float: "right",
                          marginLeft: "300",
                        }}
                      ></img>
                      <GeographyEntryDescription
                        wide={true}
                        style={{
                          marginTop: "-40px",
                          marginLeft: "100px",
                          fontSize: "1rem",
                        }}
                      >
                        Teotitlán del Valle, Oaxaca, Mexico
                        <br /> Joe Coca, photographer, 2019
                      </GeographyEntryDescription>
                    </GeographyEntryImg>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic11>

          <GeographyMosaic12 className={"mosaic"}>
            <img
              src={Icon12}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img
                        src={Icon12}
                        alt=""
                        height={"85%"}
                        width={"85%"}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.3rem" }}>
                      The original source of the sarape’s patterns, including
                      the central diamond and circular medallion, is still
                      debated and remains a bit of a mystery. The central
                      diamond was a prominent design on ancient Zapotec
                      architecture, and is still used on Saltillo sarapes. The
                      Zapotec civilization is among the oldest in Mexico, and it
                      was one of the most sophisticated in early Mesoamerica.
                      For more than 2,500 years, the Zapotecs have lived in
                      Oaxaca’s central valley. Early on, they developed
                      impressive trade networks, exchanging weavings, pottery,
                      jewelry, and foods. Their architecture and engineering
                      skills are evidenced in their two ancient capital cities,
                      Mitla and Monte Albán, and related irrigation systems.
                      They also developed hieroglyphic writing, mathematics, and
                      a calendar.The Zapotec town of Teotitlán del Valle,
                      Oaxaca, remains one of the most important weaving centers
                      in Mexico. About 80 percent of the population of 6,000 are
                      involved in some aspect of the weaving tradition, and most
                      people still earn their living as weavers. With nearly a
                      million members, today Zapotecs are the third-largest
                      Indigenous group in Mexico. The majority live in their
                      ancestral homeland in the state of Oaxaca, but there are
                      also large populations outside Mexico, most notably in
                      California (an estimated 80,000 reside in the Los Angeles
                      area) and, to a lesser degree, in other parts of the
                      United States.
                    </GeographyEntryText>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic12>
          <GeographyMosaic13 className={"mosaic"}>
            <img src={Color11} alt="" height={"100%"} width={"100%"}></img>
          </GeographyMosaic13>
          <GeographyMosaic14 className={"mosaic"}>
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </GeographyMosaic14>
          <GeographyMosaic15 className={"mosaic"}>
            <img
              src={Icon5}
              height={"100%"}
              alt=""
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry wide={true}>
                    <GeographyEntryImg height={height} wide={true}>
                      <img
                        src={Icon5}
                        alt=""
                        style={{
                          width: "65%",
                          float: "right",
                          marginLeft: "300",
                        }}
                      ></img>
                      <GeographyEntryDescription
                        wide={true}
                        style={{
                          marginTop: "-40px",
                          marginLeft: "100px",
                          fontSize: "1rem",
                        }}
                      >
                        Teotitlán del Valle, Oaxaca, Mexico
                        <br /> Javier Lazo, photographer, 2019
                      </GeographyEntryDescription>
                    </GeographyEntryImg>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic15>
          <GeographyMosaic16 className={"mosaic"}>
            <img
              src={Icon8}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg height={height}>
                      <img
                        src={Icon8}
                        alt=""
                        style={{ maxWidth: "70%", float: "right" }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1rem" }}>
                      Textile fragment with indigo design, c. 1250–1500 CE Casas
                      Grandes, northern Sierra province, Río Chico region,
                      Chihuahua, Mexico ASM 22551
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "400px",
                        marginTop: "-50px",
                        fontSize: "1rem",
                      }}
                    >
                      Mitla, Oaxaca, Mexico
                      <br /> Alana Coghlan, photographer, 2013
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </GeographyMosaic16>
          <GeographyMosaic17 className={"mosaic"}>
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </GeographyMosaic17>
        </GeographyMosaicParent>
        <br />
        <br />
        <div style={{ padding: "1rem", margin: "1.5rem" }}>
          <h1 style={{ fontSize: "2.5rem" }}> History and Geography</h1>
          <HeaderText style={{ fontSize: "1.5rem" }}>
            The sarape has been woven in many places throughout Mexico, but is
            primarily associated with the town of Saltillo, in the state of
            Coahuila, in northeastern Mexico. The Saltillo sarape grew out of
            Indigenous weaving traditions and designs combined with Spanish
            weaving technology and influence. <br />
            <br></br>
            In 1519, upon entering Mexico, Spanish military leader Hernan Cortés
            and his soldiers formed an alliance with the Tlaxcalan Indians of
            central Mexico to take over the vast Aztec empire. After the defeat
            of the Aztecs, the Tlaxcalans were enlisted to help with Spain’s
            colonization efforts. In 1591, four hundred Tlaxcalan families were
            sent northward to help colonize the areas dominated by the
            Chichimeca Indians. In return, the Tlaxcalans were awarded greater
            privileges and their own area, called Barrio San Esteban de Nuevo
            Tlaxcala, which would become Saltillo. <br />
            Saltillo grew to be an important center for trade, linking central
            Mexico with northern portions of Mexico and Texas. Continuing into
            the early 1800s, Saltillo held a bustling, annual trade fair, where
            Saltillo’s agrarian supplies, as well as sarapes, were traded
            alongside goods from various areas of Mexico and from Europe and
            Asia. During this time, Spanish traders sent merchandise acquired in
            Asia to Europe via Mexico. These items likely inspired new artistic
            ideas and possibly influenced the distinctive Saltillo sarape
            design. Saltillo sarapes, prized for their fineness, durability, and
            appealing designs, became widely traded throughout the Americas and
            abroad.
          </HeaderText>
        </div>
      </GeographyContainer>
    </>
  );
};

export default Geography;
