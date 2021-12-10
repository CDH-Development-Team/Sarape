import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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
  BackgroundDiv,
  BackgroundContentLeft,
  BackgroundContentRight,
  BackgroundImg,
  HistoryMosaicParent,
  HistoryMosaic1,
  HistoryMosaic2,
  HistoryMosaic3,
  HistoryMosaic4,
  HistoryMosaic5,
  HistoryMosaic6,
  HistoryMosaic7,
  HistoryMosaic8,
  HistoryMosaic9,
  HistoryMosaic10,
  HistoryMosaic11,
  HistoryMosaic12,
  HistoryMosaic13,
  HistoryMosaic14,
} from "../Geography/geographyElements.js";
import headerImg from "../../images/section 2/history/header.jpg";
import Icon1 from "../../images/section 2/history/1.png";
import Icon2 from "../../images/section 2/history/2.png";
import Icon3 from "../../images/section 2/history/3.png";
import Icon4 from "../../images/section 2/history/4.png";
import Icon5 from "../../images/section 2/history/5.png";
import Icon6 from "../../images/section 2/history/6.png";
import Icon7 from "../../images/section 2/history/7.png";
import Icon8 from "../../images/section 2/history/8.png";
import close from "../../images/close.png";
import Color1 from "../../images/section 2/color1.png";
import Color4 from "../../images/color4.png";
import Color5 from "../../images/color5.png";
import Color8 from "../../images/color8.png";
import Color11 from "../../images/color11.png";
import "../Geography/geography.css";
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
const History = () => {
  const { height, width } = useWindowDimensions();
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

  const [content, setContent] = React.useState(null);
  return (
    <>
      <GeographyContainer>
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
        <HistoryMosaicParent
          height={((width - (width % 38)) / 38) * 24 * 0.8}
          width={(width - (width % 38)) * 0.8}
        >
          <HistoryMosaic1 className="mosaic">
            <img
              src={Icon1}
              alt=""
              height={"100%"}
              width={"100%"}
              overflow={"hidden"}
              onClick={() => {
                setContent(
                  <BackgroundDiv>
                    <BackgroundImg height={height}>
                      <img
                        alt=""
                        src={Icon1}
                        style={{ height: "95%", marginTop: "10rem" }}
                      />
                    </BackgroundImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      The Indigenous peoples of the Americas have a long and
                      rich history of weaving. Chroniclers of Cortes’s
                      expedition described the Tlaxcalan people as being dressed
                      in clothing that was finely woven and adorned with
                      precious metals and feathers. Indigenous weavers wove
                      clothing using plant fibers, including cotton and ixtle,
                      the fiber of the maguey or agave plant, on backstrap
                      tension looms which are still used today. A backstrap
                      loom’s warp threads are either looped around two rods or
                      tied to them. The top rod is secured with twine to a
                      stationary object; the bottom rod is attached to a strap
                      around the weaver’s waist. This allows the weaver to
                      regulate the tension by moving her body slightly closer
                      to, or farther from, a stationary point.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "150px",
                        fontSize: "1rem",
                        marginTop: "20px",
                      }}
                    >
                      Zoque woman weaving on a backstrap loom <br /> Tuxtla
                      Gutiérrez, Chiapas, Mexico <br /> Donald Cordry,
                      photographer, 1940 <br />
                      ASM Cordry 1143
                    </GeographyEntryDescription>
                  </BackgroundDiv>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic1>

          <HistoryMosaic2 className="mosaic">
            <img src={Color8} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic2>
          <HistoryMosaic3 className="mosaic">
            <img
              src={Icon7}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg>
                      <img src={Icon7} alt="" width={"100%"}></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      The Spanish <i>capa</i> (cape), a large overcoat with an
                      open front and often a hood, may have been an influence on
                      the sarape as a more formal garment.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "300px",
                        marginTop: "-100px",
                        fontSize: "1rem",
                      }}
                    >
                      Spanish cape, late 1500s <br />
                      Silk, metal thread <br />
                      Purchase, Rogers Fund, 1939
                      <br />
                      The Metropolitan Museum of Art, 39.53
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic3>
          <HistoryMosaic4 className="mosaic">
            <img src={Color4} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic4>
          <HistoryMosaic5 className="mosaic">
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic5>
          <HistoryMosaic6 className="mosaic">
            <img
              src={Icon8}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg>
                      <img alt="" src={Icon8} width={"100%"} />
                    </GeographyEntryImg>

                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      An Aztec woman teaches a girl to weave on a backstrap
                      loom.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "250px",
                        marginTop: "-75px",
                        fontSize: "1rem",
                      }}
                    >
                      Codex <i>Mendoza</i>, Vol. 3, Folio 60r, c. 1541–1542
                      <br />
                      Viceroyalty of Spain<br></br>Bodleian Libraries,
                      <br /> University of Oxford
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic6>

          <HistoryMosaic7 className="mosaic">
            <img src={Color8} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic7>

          <HistoryMosaic8 className="mosaic">
            <img
              src={Icon2}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg>
                      <img
                        alt=""
                        src={Icon2}
                        style={{ marginTop: "3.5rem", width: "100%" }}
                      />
                    </GeographyEntryImg>

                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      How people dress and adorn themselves has long served as a
                      form of identity, signaling culture and status. During the
                      time of the Aztec empire (1345–1521 CE), both custom and
                      law controlled what people could wear according to their
                      class. The influence of the Spaniards on Indigenous
                      lifeways, including their clothing, can be seen through
                      illustrations in codices* produced under Spanish rule.
                      <br />
                      <br /> The Codex <i>Mendoza</i> illustrates Aztec people
                      of high status, priests, and rulers wearing{" "}
                      <i>tilmàtli</i>, decorated cloaks woven of cotton or{" "}
                      <i>ixtle</i> on a backstrap loom. The motifs and materials
                      of the <i>tilmàtli</i> indicated the wearer’s class and
                      rank. It is possible that the Saltillo sarape’s designs
                      and how it was worn were influenced by the <i>tilmàtli</i>
                      .<br></br>
                      <br></br>
                      <div style={{ fontSize: "1rem" }}>
                        *Codices is the plural of codex. right<br></br>Notice
                        how the <i>tilmàtli</i> are similar to the Saltillo
                        sarape in design and how they were worn.
                      </div>
                      <div className="credits" style={{ fontSize: "1rem" }}>
                        Codex <i>Mendoza</i>, Folio 65r, c. 1541–1542
                        <br />
                        Viceroyalty of Spain<br></br>Bodleian Library, Oxford
                        University
                      </div>
                    </GeographyEntryText>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic8>

          <HistoryMosaic9 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic9>

          <HistoryMosaic10 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic10>

          <HistoryMosaic11 className="mosaic">
            <img
              src={Icon4}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg wide={true} height={height}>
                      <img
                        src={Icon4}
                        alt=""
                        style={{ width: "55%", float: "right" }}
                      ></img>
                      <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                        The Aztecs’ <i>tilmàtli</i>, tied at the shoulder as
                        depicted in several codices, is also part of the
                        sarape’s cultural lineage. This style is similar to a
                        poncho.
                      </GeographyEntryText>
                      <GeographyEntryDescription
                        style={{
                          marginTop: "-75px",
                          marginLeft: "75px",
                          fontSize: "1rem",
                        }}
                      >
                        <i>Codex Primeros Memoriales</i>, Vol. 3, Estampa 21
                        <br></br>
                        Bernardino Sahagún,{" "}
                        <i>
                          Historia General de las Cosas de
                          <br></br>
                          Nueva España Biblioteca Medicea Laurenziana
                        </i>
                      </GeographyEntryDescription>
                    </GeographyEntryImg>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic11>

          <HistoryMosaic12 className="mosaic">
            <img
              src={Icon3}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg>
                      <img alt="" src={Icon3} width={"90%"}></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      Texcoco ruler Nezahualpilli shown wearing a{" "}
                      <i>xiuhtilmatli</i> (blue cape), which would have been
                      woven on a backstrap loom. Note the complex designs and
                      the natural dye colors: blue from the indigo plant and red
                      from cochineal insects.
                    </GeographyEntryText>
                    <GeographyEntryDescription
                      style={{
                        marginLeft: "250px",
                        marginTop: "-100px",
                        fontSize: "1rem",
                      }}
                    >
                      <i>Codex Ixtlilxochitl,</i> Folio 108r, c. 1580–1584
                      <br />
                      Bibliothèque Nationale de France
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic12>

          <HistoryMosaic13 className="mosaic">
            <img
              src={Icon6}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <GeographyEntry>
                    <GeographyEntryImg>
                      <img
                        alt=""
                        src={Icon6}
                        style={{ marginTop: "150px", width: "100%" }}
                      ></img>
                    </GeographyEntryImg>
                    <GeographyEntryText style={{ fontSize: "1.5rem" }}>
                      Sarapes are worn in many ways: wrapped or draped like a
                      shawl, over one shoulder, or as a poncho. The typical
                      sarape may be woven in one piece, but more frequently
                      consists of two panels joined together leaving a neck
                      slit, also called a bocamanga, through which the wearer’s
                      head could fit.In Spanish Colonial times, the sarape was
                      mainly worn in northern Mexico by hacendados, or ranch
                      owners, who traveled on horseback. The sarape’s loose fit
                      made it a practical riding garment. Later, it became a
                      status symbol worn by wealthy “city folk.” While anyone
                      could wear one, they were expensive to buy. These textiles
                      were masterfully woven with incredible tightness and
                      complex designs. It is possible that they were created in
                      small workshops, located on many of the large ranches or
                      haciendas
                    </GeographyEntryText>

                    <GeographyEntryDescription
                      style={{
                        marginTop: "25px",
                        marginLeft: "280px",
                        fontSize: "1rem",
                      }}
                    >
                      <i>Rancheros</i>, 1836 <br />
                      Carl Nebel, German, 1805–1855
                      <br />
                      Lithograph
                      <br />
                      <i>
                        Voyage Pittoresque et Archéologique dans
                        <br />
                        la Partie la plus Intéressante du Méxique
                      </i>{" "}
                      <br />
                      Album, Alamy Stock Photo
                    </GeographyEntryDescription>
                  </GeographyEntry>
                );
                openModal();
              }}
            ></img>
          </HistoryMosaic13>
          <HistoryMosaic14 className="mosaic">
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </HistoryMosaic14>
        </HistoryMosaicParent>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </GeographyContainer>
    </>
  );
};

export default History;
