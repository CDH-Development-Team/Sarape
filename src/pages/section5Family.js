import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Modal from "react-modal";
import ModalVideo from 'react-modal-video'
// import React, { useState } from "react";
import "./styles.css";

import Icon1 from "../images/5B4_Bobbins by Craig Holmes.jpg";
import Icon2 from "../images/PGOAX82718-0242.jpg";
import Icon3 from "../images/5A2_Porfirio_Gutierrez_by_recker.jpg";
import Icon4 from "../images/Teotitlan shoot-by nikhol esteras.jpg";
import Icon5 from "../images/5A1_Parents by Javier Lazo.jpg";
import Icon6 from "../images/5B2_08-09-18 The Big Boys a.jpg";
import Icon7 from "../images/By Alana Coghlan.jpg";
import Icon8 from "../images/5A3_Familia.jpg";
import Icon9 from "../images/new_family_img.jpg";
import close from "../images/close.png";

import "../components/Geography/geography.css";

import Color1 from "../images/section 2/color1.png";

import Color4 from "../images/color4.png";
import Color5 from "../images/color5.png";
import Color8 from "../images/color8.png";
import Color11 from "../images/color11.png";
import Color10 from "../images/color10.png";

import {
  GeographyContainer,
} from "../components/Geography/geographyElements.js";
import {
  FamilyMosaicParent,
  FamilyMosaic1,
  FamilyMosaic2,
  FamilyMosaic3,
  FamilyMosaic4,
  FamilyMosaic5,
  FamilyMosaic6,
  FamilyMosaic7,
  FamilyMosaic8,
  FamilyMosaic9,
  FamilyMosaic10,
  FamilyMosaic11,
  FamilyMosaic12,
  FamilyMosaic13,
  FamilyMosaic14,
  FamilyMosaic15,
  FamilyMosaic16,
  FamilyMosaic17,
  FamilyMosaic18,
  FamilyMosaic19,
} from "../components/Geography/geographyElements.js";

import "../components/Geography/geography.css";
import useWindowDimensions from "../components/Geography/dimensions";

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
const FamilyPage = () => {
  const { width } = useWindowDimensions();
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

  function closeModal() {
    setIsOpenM(false);
  }
  const [content, setContent] = React.useState(null);
  const [vidOpen, setVidOpen] = useState(false);
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
        <FamilyMosaicParent
          height={((width - (width % 17)) / 17) * 10}
          width={width - (width % 17)}
          style={{ marginright: 0 }}
        >
          <FamilyMosaic1 className="mosaic">
            <img
              src={Icon1}
              style={{ height: "100%", width: "100%" }}
              alt=""
              onClick={() => {
                setContent(
                  <div className="content">
                    <div
                      className="text"
                      style={{
                        fontFamily: "",
                        padding: "1rem",
                        fontSize: "1.5rem",
                      }}
                    >
                      <div>
                        When the wool is dry, it is combed with carding paddles,
                        which are like large hairbrushes with metal bristles.
                        This helps to further clean, as well as align, the
                        fibers for spinning into yarn. The fiber is removed from
                        the carding paddles in one fluffy piece. That piece is
                        then folded in half lengthwise and torn down the middle,
                        just short of tearing the whole piece in half. The
                        result is one long strip with the fibers all combed in
                        the same direction. This facilitates spinning it into
                        yarn.
                      </div>
                      <br />
                      <div>
                        The art of spinning wool takes years to master. Wool’s
                        width, texture, and tensile strength can vary greatly.
                        When weaving a piece, all the different colors of yarn
                        usually need to be made to the same specifications. We
                        use a manually powered wooden spinning wheel to
                        transform the wool into yarn. It is then naturally dyed
                        before using the spinning wheel to roll yarn from a ball
                        into a large loop to be placed over the{" "}
                        <i>biilieelii</i>, a rotating device used to feed the
                        yarn onto a bobbin. Other materials used in our studio
                        include <i>ixtle</i> (agave fiber), palm leaves,
                        recycled copper thread, and machine-spun wool yarn.
                      </div>
                      <div
                        style={{
                          color: "#fff",
                          fontSize: "1rem",
                          fontFamily: "",
                          marginLeft: "25rem",
                          marginTop: "2rem",
                        }}
                      >
                        Bobbins of spun, dyed wool ready to use. Craig Holmes,
                        photographer, 2018
                      </div>
                    </div>
                    <img
                      src={Icon1}
                      alt="Developer"
                      style={{ width: "100%", marginTop: "1.5rem" }}
                    />
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic1>

          
          <FamilyMosaic2 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic2>
          <FamilyMosaic3 className="mosaic">
            <img
              src={Icon6}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content1">
                    <div className="row">
                      <div className="column5">
                        <p
                          style={{
                            fontFamily: "",
                            padding: "1rem",
                            fontSize: "1.4rem",
                          }}
                        >
                          Sheep are very special to my practice. Sheep’s wool
                          comes in a variety of colors, ranging from white and
                          light creams to tans, browns, and black. For dyeing
                          yarn, white wool is the most desirable. Darker wool is
                          also dyed, with beautiful results, but this cannot be
                          achieved solely using natural dyes. Blending two or
                          more colors of wool when carding gives a textured look
                          to a yarn. Before we have wool to dye, though, the
                          sheep must be sheared and their wool must be washed,
                          carded (combed), and spun.
                          <br></br>
                          <br></br>My mother has been washing, carding, and
                          spinning yarn since she was a young girl. She learned
                          this skill at the knee of her mother, who was taught
                          by her mother’s mother. Now in her late seventies, she
                          concentrates more on grooming each piece, the final
                          steps before presenting the textiles to the public.
                          Today, we focus on the process of natural dyeing and
                          weaving of textiles. We collaborate with other
                          families in a nearby community to help with the
                          washing, carding, and spinning of raw wool. In this
                          way, we are contributing to other families’ livelihood
                          as well as the preservation of their traditional
                          practices.
                        </p>
                        <div
                          style={{
                            color: "#fff",
                            fontSize: "1rem",
                            fontFamily: "",
                            marginLeft: "15rem",
                          }}
                        >
                          Churro sheep were introduced to the northern reaches
                          of New Spain by Spanish colonizer Francisco Vázquez de
                          Coronado in 1521. Weavers quickly adopted Churro wool
                          and continue to prize it today.<br></br>
                          <br></br>
                        </div>
                      </div>
                      <div style={{ textAlign: "left", marginTop: "2rem" }}>
                        <img
                          src={Icon6}
                          alt="Developer"
                          style={{ width: "100%" }}
                        />
                        <div
                          style={{
                            color: "#fff",
                            fontSize: "1rem",
                            fontFamily: "",
                          }}
                        >
                          Three male Navajo Churro sheep, Spin Dance
                          Acres, Boise, ID. Bonnie Barcus, <br></br>
                          photographer, 2018{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic3>

          <FamilyMosaic4 className="mosaic">
            <img src={Color4} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic4>

          <FamilyMosaic5 className="mosaic">
            <img
              src={Icon4}
              height={"100%"}
              width={"100%"}
              alt=""
              onClick={() => {
                setContent(
                  <div className="content">
                    <div
                      className=""
                      style={{
                        width: "60%",
                        marginLeft: "2rem",
                        marginRight: "3rem",
                        fontSize: "1.25rem",
                        fontFamily: "",
                        marginTop: "1rem"
                      }}
                    >
                      Sheep are usually sheared once a year. Over the course of
                      a year, their coats gather burrs, plant matter, and dirt.
                      Even though wool naturally repels impurities, it must be
                      thoroughly cleaned and carded before being spun into yarn.
                      Often, my mother says that water is alive with tremendous
                      force; in her healing process, she works in harmony with
                      this force. This makes me realize that the process of
                      washing raw wool is also a ceremony.<br></br>
                      <br></br>Separating, cleaning, and washing raw wool are
                      labor intensive. The first step is to open up and separate
                      the matted fibers. Larger pieces of foreign matter are
                      picked out by hand, and compacted wool is “fluffed” to
                      make washing more effective. After this preliminary
                      cleaning process, the wool is loaded into reed baskets and
                      taken to the river to be washed. It is put in a tub, and a
                      lather is worked up, using river water. After the dirt is
                      loosened, the wool is put into a hamper-sized reed basket
                      and washed again using the ribbed sides of the basket as a
                      washboard. There is just enough space between the reeds to
                      allow the river water to stream through, rinsing away the
                      dirt without losing much wool.<br></br>
                      <br></br>Once the wool is clean, the basket is pulled from
                      the river and set on the bank until the excess water runs
                      off. The wet wads of newly washed wool are laid out to dry
                      on large rocks. After the excess water has seeped out, the
                      wool is placed into the baskets and taken home. In the
                      courtyard, we place the wool on petate (woven palm fiber)
                      mats to dry completely.
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "1rem",
                          fontFamily: "",
                          paddingTop: "1rem",
                          paddingLeft: "30rem",
                        }}
                      >
                        Andrea Contreras preparing cleaned wool for spinning.
                        <br></br>Nikhol Esterás, photographer, 2017
                      </p>
                      <br></br>
                    </div>
                    <img
                      src={Icon4}
                      alt="Developer"
                      style={{
                        width: "55%",
                        marginTop: "4rem",
                      }}
                    />
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic5>

          <FamilyMosaic6 className="mosaic">
            <img src={Color8} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic6>

          <FamilyMosaic7 className="mosaic">
            <img
              src={Icon2}
              height={"100%"}
              width={"100%"}
              alt=""
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      {/* <h2>John Doe</h2> */}
                      <div>
                        <div
                          style={{
                            marginLeft: "2rem",
                            marginRight: "5rem",
                            fontSize: "1.3rem",
                            marginTop: "2rem",
                            fontFamily: "",
                          }}
                        >
                          Biodiversity is endangered due to climate change. We
                          experience these changes firsthand. During our last
                          harvest in Teotitlán, we did not get enough rain. Most
                          of the essential crops we use are either farmed
                          without irrigation systems or grow wild in the
                          mountains. We know the cycles of rainy and dry
                          seasons, and plant in harmony with those times.
                          However, this year the rains did not come. We had
                          weeks of dry weather, and when the rains did finally
                          come, it was too late for the corn harvest.<br></br>
                          <br></br>The harvest of indigo for this year was about
                          a quarter of last year’s, which was a bad year for the
                          plant. Without this plant, there will simply be no
                          blue colors in our weavings. We always pay respect to
                          Mother Earth by only taking what we need. Before we
                          collect the plants, we give thanks to the greater
                          being. To us, these plants are as important as food or
                          medicine. Natural dye is not a trend for us; it is our
                          way of life and our legacy.<br></br>
                          <br></br>This reality has inspired me to purchase a
                          piece of land where we can grow our own plants for a
                          more sustainable practice. In addition to natural-dye
                          plants, we will grow medicinal plants that will enable
                          my mother and brother to continue practicing
                          traditional medicine. Our new garden will also serve
                          as a place where young weavers from our community can
                          come and learn about their legacy, as well as where
                          dialogue and exchange can take place between our
                          practice and interested people from around the world.
                          This will be the way to document and preserve our
                          cultural heritage for future generations.{" "}
                        </div>
                        <div
                          style={{
                            fontSize: "1rem",
                            marginLeft: "38rem",
                            marginTop: "2rem",
                          }}
                        >
                          Baskets of dye materials <br></br>Joe Coca,
                          photographer, 2019
                        </div>
                        <div
                          style={{
                            fontSize: "1.5rem",
                            fontFamily: "Lucida",
                            color: "#fff",
                            paddingTop: "2rem",
                            paddingLeft: "2rem",
                            marginRight: "3rem",
                          }}
                        >
                          “The plants and trees are alive, just like us; we
                          cannot hurt them nor cut them for any reason. We are
                          supposed to only take what we need from nature.”
                          <br></br>
                          <br></br>
                          <p
                            style={{
                              paddingLeft: "32rem",
                              fontFamily: "Lucida",
                              fontSize: "1.5rem",
                            }}
                          >
                            Amado Gutiérrez
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src={Icon2}
                          alt="Developer"
                          style={{
                            marginRight: "5rem",
                            width: "100%",
                            marginTop: "1.5rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic7>

          <FamilyMosaic8 className="mosaic"></FamilyMosaic8>

          <FamilyMosaic9 className="mosaic">
            <img
              src={Icon7}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div className="row1">
                      <div>
                        <div
                          style={{
                            fontSize: "1.5rem",
                            width: "80%",
                            fontFamily: "",
                            marginLeft: "1.2rem",
                          }}
                        >
                          For me, natural dyeing is a spiritual process. We must
                          be mindful that Mother Earth is a living being with a
                          tremendous force. All elements used for natural dyes,
                          traditional medicine, and foods are grown, thanks to
                          the rain, soil, and other important resources provided
                          by a greater being. All of these elements are alive,
                          and without them, there would simply not be the hues
                          you see in our textiles.<br></br>
                          <br></br>The colors that come from plants go beyond
                          beauty; they are connected to a living source and work
                          in harmony with the wisdom of the practitioner. These
                          dye materials are sacred and precious. They connect me
                          and my family to the great master dyers and weavers of
                          the past, who started these practices thousands of
                          years ago.<br></br>
                          <br></br>Our exposure to traditional knowledge gives
                          us an understanding of about ten different color hues.
                          We are continuously researching and experimenting with
                          a diverse array of plants and fibers to create more
                          hues. We have now developed more than two hundred
                          different colors, all from natural sources. As a
                          result, we have tremendous respect for and connection
                          to Mother Earth, understanding her limitations and the
                          limitations of the materials.
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src={Icon7}
                          alt="Developer"
                          style={{
                            marginRight: "5rem",
                            width: "100%",
                            marginTop: "2rem",
                          }}
                        />
                        <div
                          style={{
                            fontSize: "1rem",
                          }}
                        >
                          Undyed wool yarn<br></br>Alana Coghlan, photographer,
                          2015
                        </div>
                        <div
                          style={{
                            fontSize: "1.5rem",
                            fontFamily: "Lucida",
                            color: "#fff",
                            width: "100%",
                            paddingTop: "1rem",
                          }}
                        >
                          “When you work with nature respectfully, you do no
                          harm. You do not need damaging chemicals. You do not
                          need to harvest in ways that destroy. You do not hurt
                          the environment and the world. I think this is what
                          positive change is about: working in harmony with
                          nature and working in ways that we can teach to young
                          people, so that they can earn a living and keep our
                          world healthy. I think I put those thoughts into all
                          the colors we make, and into all the parts of my
                          life.”<br></br>
                          <br></br>
                          <p
                            style={{
                              marginLeft: "28rem",
                              fontFamily: "Lucida",
                              fontSize: "1.5rem",
                            }}
                          >
                            Juana Gutiérrez Cortreras
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic9>

          <FamilyMosaic10 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic10>

          <FamilyMosaic11 className="mosaic">
            <img
              src={Icon5}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content1">
                    <div className="row">
                      <div className="column">
                        <p
                          style={{
                            fontFamily: "",
                            marginRight: "7rem",
                            fontSize: "1.25rem",
                            marginLeft: "2rem",
                          }}
                        >
                          My parents are the third generation of dyers and
                          weavers in our family, which makes my siblings and me
                          the fourth generation of weavers. As newlyweds, the
                          first things your parents usually give you are a loom,
                          a spinning wheel, and enough materials to start a
                          studio, so you can feed your family. However, since my
                          grandparents passed away before my parents got
                          married, they had to figure it all out themselves.
                          <br />
                          <br />
                        </p>
                        <div
                        style={{
                          marginLeft: "2rem",
                        }}
                      >
                        <img
                          src={Icon5}
                          alt="Porfirio's Parents"
                          style={{ width: "70%"}}
                        />
                        </div>
                        <p  className="column"
                          style={{
                            fontFamily: "",
                            fontSize: "1rem",
                            marginRight: "2rem",
                            marginLeft: "1.5rem",
                            width:"110%"
                          }}
                        >
                          Porfirio’s parents, Amado Gutiérrez and Andrea
                          Contreras.<br></br> Javier Lazo Gutiérrez,
                          photographer, 2019
                        </p>
                      </div>
                      <div className="column2">
                        <p
                          style={{
                            fontFamily: "",
                            marginRight: "7rem",
                            fontSize: "1.25rem",
                            marginLeft: "2rem",
                            marginTop:".5rem"
                          }}
                        >
                          My parents have always worked collaboratively to
                          create each piece—from cleaning wool, spinning it,
                          collecting the plants for dyeing, dyeing the wool, to
                          weaving. To execute a piece, my mom does the carding
                          and spinning, and my dad weaves. They loved working at
                          night because night brings calmness and concentration.
                          This is how they raised eleven kids. They always say
                          that they are blessed that their humble work as
                          artisans enabled them to raise their kids.
                          <br />
                          <br />
                        </p>
                        <div
                        style={{
                          marginLeft: "2rem",
                        }}
                      >
                        <img
                          src={Icon8}
                          alt="Porfirio's Family"
                          style={{ width: "70%" }}
                        />
                        </div>
                        <p  className="column2"
                          style={{
                            fontFamily: "",
                            fontSize: "1rem",
                            marginRight: "2rem",
                            marginLeft: "2rem",
                            marginTop:".6rem"
                          }}
                        >
                          The Gutiérrez family <br></br>Javier Lazo Gutiérrez,
                          photographer 2015
                        </p>
                      </div>
                      </div>
                      <br></br>
                    <div className="row1" style={{ marginLeft: "0rem" }}></div>

                    <div className="quoteDiv">
                      <p
                        className="quote"
                        style={{
                          fontFamily: "Lucida",
                          fontSize: "1.5rem",
                        }}
                      >
                        “The greater being has given us the plants for food,
                        dyes, and for medicine. Because they connect us to
                        Mother Earth, they are a deep part of our body and our
                        wellbeing. The wisdom to use them was inherited from our
                        ancestors.”
                      </p>
                      <p
                        className="author"
                        style={{
                          fontFamily: "Lucida",
                          fontSize: "1.5rem",
                        }}
                      >
                        {" "}
                        Andrea Contreras
                      </p>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic11>

          <FamilyMosaic12 className="mosaic">
            <img src={Color11} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic12>

          <FamilyMosaic13 className="mosaic">
            <img
              src={Icon3}
              alt=""
              height={"100%"}
              width={"110%"}
              onClick={() => {
                setContent(
                  <div className="content">
                    <div
                      className="text"
                      style={{
                        width: "60%",
                        marginLeft: "3rem",
                        marginTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "",

                          fontSize: "1.5rem",
                          marginTop: "1rem",
                        }}
                      >
                        About nineteen years ago, I started my own studio
                        involving my family and community. Our mission is to
                        preserve and uplift our historically significant
                        natural-dye practices. Our parents’ humble beginnings
                        have grown into what is now Porfirio Gutiérrez Studio,
                        with a team of thirty-five people who are mostly women.
                        In addition, we work closely with cochineal and indigo
                        farmers, spinners, and others who help with various
                        essentials. About eighty people benefit from each
                        textile that we sell. What started with two people
                        working late to feed their family is now a large
                        creative team trying to preserve our ancient traditions.
                      </div>
                      <br />
                      <div
                        style={{
                          fontFamily: "",
                          marginLeft: "20rem",
                          fontSize: "1rem",
                        }}
                      >
                        Porfirio Gutiérrez with a full of pericón to use for
                        making a yellow dye. Pericón (Tagetes lucida) is
                        referred to as both Mexican mint marigold and Mexican
                        tarragon. Keith Recker, photographer, 2018
                      </div>
                      <div
                        style={{
                          fontFamily: "Lucida",
                          marginTop:"1.5rem"
                        }}
                      >
                        Preservation, education, and sustainability are all
                        extremely important. They are my studio’s foundation for
                        the future.
                        <br />
                        <br />
                        <div>
                          <p
                            style={{
                              paddingLeft: "25rem",
                              fontFamily: "Lucida",
                              fontSize: "1.5rem",
                            }}
                          >
                            Porfirio Gutierrez
                          </p>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <img
                      src={Icon3}
                      style={{
                        height: "40%",
                        width: "30%",
                        alignItems: "right",
                        marginTop: "3rem",
                        marginLeft: "8rem"
                      }}
                      alt="Porfirio Gutierrez"
                    />
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic13>

          <FamilyMosaic14 className="mosaic">
            <img src={Color5} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic14>

          <FamilyMosaic15 className="mosaic">
            <img src={Color4} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic15>

          <FamilyMosaic16 className="mosaic">
            <img
              src={Icon8}
              alt=""
              height={"100%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content1">
                    <div className="row" style={{ margin: "1rem" }}>
                      <div className="column">
                        <p
                          style={{
                            fontFamily: "",
                            marginRight: "7rem",
                            fontSize: "1.5rem",
                            marginLeft: "2rem",
                          }}
                        >
                          My parents are the third generation of dyers and
                          weavers in our family, which makes my siblings and me
                          the fourth generation of weavers. As newlyweds, the
                          first things your parents usually give you are a loom,
                          a spinning wheel, and enough materials to start a
                          studio, so you can feed your family. However, since my
                          grandparents passed away before my parents got
                          married, they had to figure it all out themselves.
                          <br />
                          <br />
                          My parents have always worked collaboratively to
                          create each piece—from cleaning wool, spinning it,
                          collecting the plants for dyeing, dyeing the wool, to
                          weaving. To execute a piece, my mom does the carding
                          and spinning, and my dad weaves. They loved working at
                          night because night brings calmness and concentration.
                          This is how they raised eleven kids. They always say
                          that they are blessed that their humble work as
                          artisans enabled them to raise their kids.
                        </p>
                        <p
                          style={{
                            fontFamily: "",
                            fontSize: "1rem",
                            marginRight: "2rem",
                            marginLeft: "20rem",
                            marginTop: "2rem",
                          }}
                        >
                          Porfirio’s parents, Amado Gutiérrez and Andrea
                          Contreras.<br></br> Javier Lazo Gutiérrez,
                          photographer, 2019
                          <br></br>
                          <br></br>
                          The Gutiérrez family <br></br>Javier Lazo Gutiérrez,
                          photographer 2015
                        </p>
                      </div>
                      <div
                        className="column2"
                        style={{
                          marginTop: "2rem",
                          marginLeft: "0rem",
                          marginBottom: "3rem",
                        }}
                      >
                        <img
                          src={Icon5}
                          alt="Developer"
                          style={{ width: "70%" }}
                        />
                      </div>
                      <br></br>
                      <div className="column2" style={{ marginLeft: "0rem" }}>
                        <img
                          src={Icon8}
                          alt="Developer"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </div>
                    <div className="row1" style={{ marginLeft: "0rem" }}></div>

                    <div className="quoteDiv">
                      <p
                        className="quote"
                        style={{
                          fontFamily: "Lucida",
                          fontSize: "1.5rem",
                        }}
                      >
                        “The greater being has given us the plants for food,
                        dyes, and for medicine. Because they connect us to
                        Mother Earth, they are a deep part of our body and our
                        wellbeing. The wisdom to use them was inherited from our
                        ancestors.”
                      </p>
                      <p
                        className="author"
                        style={{
                          fontFamily: "Lucida",
                          fontSize: "1.5rem",
                        }}
                      >
                        {" "}
                        Andrea Contreras
                      </p>
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic16>

          <FamilyMosaic17 className="mosaic">
            <img src={Color1} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic17>

          <FamilyMosaic18 className="mosaic">
            <img
              src={Icon9}
              alt=""
              height={"70%"}
              width={"100%"}
              onClick={() => {
                setContent(
                  <div className="content1">
                    <div className="row" style={{ margin: "2rem" }}>
                      <div className="column">
                        <div
                          style={{
                            color: "#fff",
                            fontFamily: "",
                            padding: "1rem",
                            fontSize: "1.5rem",
                          }}
                        >
                          There is a notation that a tradition cannot live
                          outside of its place of origin, and in terms of my
                          weaving and natural dyeing traditions that they stay
                          on the other side of the border. In my opinion that is
                          false—even if we were talking about a different
                          continent—but we are focusing on the Americas, which
                          is the same land as that of my ancestors.
                          <br></br>
                          <br></br>
                          We often forget that our head is our house and
                          traditions are alive within the people, therefore
                          wherever people go they carry their traditions with
                          them. That is how traditions stay alive, allowing them
                          to grow, evolve, preserve, and innovate.<br></br>
                          <br></br>
                          <div
                            style={{
                              color: "#fff",
                              fontFamily: "",
                              paddingTop: "5rem",
                              fontSize: "1rem",
                              marginLeft: "20rem",
                            }}
                          >
                            Porfirio Gutiérrez working with his wife and son at
                            his studio in Ventura, CA. Kate Kunath,
                            photographer, 2021
                          </div>
                        </div>
                      </div>

                      <img
                        src={Icon9}
                        alt="Developer"
                        style={{
                          height: "50%",
                          width: "50%",
                          alignItems: "right",
                        }}
                      />
                    </div>
                  </div>
                );
                openModal();
              }}
            ></img>
          </FamilyMosaic18>

          <FamilyMosaic19 className="mosaic">
            <img src={Color10} alt="" height={"100%"} width={"100%"}></img>
          </FamilyMosaic19>
        </FamilyMosaicParent>
      </GeographyContainer>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          backgroundColor: "#4a0033",
        }}
      >
        <div style={{ padding: "3rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#fff",
              marginLeft: "-15px",
              position: "relative",
            }}
          >
            Family and Philosophy
            <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="Y3vx5OLSWLs" onClose={() => setVidOpen(false)} />

			<button className="btn-primary" style={{marginLeft:"1rem", position: "absolute", top: "10%", height:"2rem", fontSize:'1.2rem'}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		</React.Fragment>
          </h1>
          
          <br />
          <div className="row1">
            <div
              className="column1"
              style={{
                fontFamily: "",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              My parents are the third generation of dyers and weavers in our
              family, which makes my siblings and me the fourth generation of
              weavers. As newlyweds, the first things your parents usually give
              you are a loom, a spinning wheel, and enough materials to start a
              studio, so you can feed your family. However, since my
              grandparents passed away before my parents got married, they had
              to figure it all out themselves.
            </div>
            <div
              className="column1"
              style={{
                fontFamily: "",

                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              My parents have always worked collaboratively to create each
              piece—from cleaning wool, spinning it, collecting the plants for
              dyeing, dyeing the wool, to weaving. To execute a piece, my mom
              does the carding and spinning, and my dad weaves. They loved
              working at night because night brings calmness and concentration.
              This is how they raised eleven kids. They always say that they are
              blessed that their humble work as artisans enabled them to raise
              their kids.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  // const [isOpen, setIsOpen] = useState(false);
};

export default FamilyPage;
