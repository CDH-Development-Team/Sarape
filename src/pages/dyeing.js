
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import History from '../components/History';
import FamilyMosaic from '../components/FamilyMosaic';
import Modal2 from '../components/Modal2/modal2';
// import React, { useState } from "react";
import "./styles.css";
import Button from '../components/button/Button';

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

import Icon12 from "../images/color.png";
import Icon13 from "../images/color2.png";
import Icon14 from "../images/color3.png";
import Icon15 from "../images/color4.png";
import Icon16 from "../images/color5.png";
import Icon17 from "../images/color6.png";
import Icon18 from "../images/color7.png";
import Icon19 from "../images/color8.png";
import Icon20 from "../images/color9.png";
import Icon21 from "../images/color10.png";




import { GeographyContainer, MosaicWrapper, MosaicImg, HeaderText, GeographyEntry, GeographyEntryText, GeographyEntryImg, GeographyEntryDescription, GeographyStatues, Statue, StatueImg, BackgroundDiv, BackgroundContentLeft, BackgroundContentRight, BackgroundImg, HistoryMosaicParent, HistoryMosaicParent2,
    HistoryMosaic22, HistoryMosaic23, HistoryMosaic24, HistoryMosaic25, HistoryMosaic26, HistoryMosaic27, HistoryMosaic28, HistoryMosaic29, HistoryMosaic30, HistoryMosaic31,HistoryMosaic32,
    Color,Color2,Color3,Color4,Color5,Color6,Color7,Color8,Color9,Color10} from '../components/Geography/geographyElements.js';
// import Color1 from '../images/section 2/color1.png'
import "../components/Geography/geography.css";
import useWindowDimensions from '../components/Geography/dimensions';


const DyeingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);


    const {height, width} = useWindowDimensions();
    // let subtitle;
    //     const [modalIsOpen, setIsOpen] = React.useState(false);
    
        
    //     function openModal() {
    //         setIsOpen(true);
    //       }
    //       function afterOpenModal() {
    //         // references are now sync'd and can be accessed.
            
    //       }
        
    //       function closeModal() {
    //         setIsOpen(false);
    //       }

    // const [content, setContent] = React.useState(null);
  return (
    <React.Fragment>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
 <GeographyContainer>
     <HistoryMosaicParent2 height={(width-(width%16))/16*8} width={(width-(width%16))}>
        <HistoryMosaic22 className="mosaic">
        <img src={Icon1} height={"100%"} width={"100%"} onClick={() => setShow(true)}></img>
        </HistoryMosaic22>

        {/* <HistoryMosaic2 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic2> */}
        <HistoryMosaic23 className="mosaic">
        <img src={Icon2} height={"100%"} width={"100%"} onClick={() => setShow1(true)}></img>
        </HistoryMosaic23>
        {/* <HistoryMosaic4 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic4 >
        <HistoryMosaic5 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic5 > */}
        <HistoryMosaic24 className="mosaic">
        <img src={Icon3} height={"100%"} width={"100%"} onClick={() => setShow2(true)}></img>
        </HistoryMosaic24>

        {/* <HistoryMosaic7 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"}></img>
        </HistoryMosaic7> */}

        <HistoryMosaic25 className="mosaic">
        <img src={Icon4} height={"100%"} width={"100%"} onClick={() => setShow3(true)}></img>
        </HistoryMosaic25>
{/* 
        <HistoryMosaic9 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"}></img>
        </HistoryMosaic9> */}

        <HistoryMosaic26 className="mosaic">
        <img src={Icon5} height={"100%"} width={"100%"} onClick={() => setShow4(true)}></img>
        </HistoryMosaic26>

        {/* <HistoryMosaic11 className="mosaic">
        <img src={Icon4} height={"100%"} width={"100%"} onClick={() => setShow3(true)}></img>
        </HistoryMosaic11> */}

        <HistoryMosaic27 className="mosaic">
        <img src={Icon6} height={"100%"} width={"100%"} onClick={() => setShow5(true)}></img>
        </HistoryMosaic27>

        <HistoryMosaic28 className="mosaic">
        <img src={Icon7} height={"100%"} width={"100%"} onClick={() => setShow6(true)}></img>
        </HistoryMosaic28>
        <HistoryMosaic29 className="mosaic">
        <img src={Icon8} height={"100%"} width={"100%"} onClick={() => setShow7(true)}></img>
        </HistoryMosaic29>
        <HistoryMosaic30 className="mosaic">
        <img src={Icon9} height={"100%"} width={"100%"} onClick={() => setShow8(true)}></img>
        </HistoryMosaic30>
        <HistoryMosaic31 className="mosaic">
        <img src={Icon10} height={"100%"} width={"100%"} onClick={() => setShow9(true)}></img>
        </HistoryMosaic31>
        <HistoryMosaic32 className="mosaic">
        <img src={Icon11} height={"100%"} width={"100%"} onClick={() => setShow10(true)}></img>
        </HistoryMosaic32>
        
        <Color className="mosaic">
        <img src={Icon12} height={"100%"} width={"100%"} ></img>
        </Color>
        <Color2 className="mosaic">
        <img src={Icon13} height={"100%"} width={"100%"} ></img>
        </Color2>
        <Color3 className="mosaic">
        <img src={Icon14} height={"100%"} width={"100%"} ></img>
        </Color3>
        <Color4 className="mosaic">
        <img src={Icon15} height={"100%"} width={"100%"} ></img>
        </Color4>
        <Color5 className="mosaic">
        <img src={Icon16} height={"100%"} width={"100%"} ></img>
        </Color5>
        <Color6 className="mosaic">
        <img src={Icon17} height={"100%"} width={"100%"} ></img>
        </Color6>
        <Color7 className="mosaic">
        <img src={Icon18} height={"100%"} width={"100%"} ></img>
        </Color7>
        <Color8 className="mosaic">
        <img src={Icon19} height={"100%"} width={"100%"} ></img>
        </Color8>
        <Color9 className="mosaic">
        <img src={Icon20} height={"100%"} width={"100%"} ></img>
        </Color9>
        <Color10 className="mosaic">
        <img src={Icon21} height={"100%"} width={"100%"} ></img>
        </Color10>



        <Color5 className="mosaic">
        <img src={Icon16} height={"100%"} width={"100%"} ></img>
        </Color5>

        {/* <HistoryMosaic13 className="mosaic">
        <img src={Icon6} height={"100%"} width={"100%"} onClick={() => setShow5(true)}></img>
        </HistoryMosaic13> */}
        {/* <HistoryMosaic14 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"}></img>
        </HistoryMosaic14> */}
     </HistoryMosaicParent2 >
 </GeographyContainer>

      <div style={{
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          backgroundColor: "#4a0033",
          padding: "3rem"
        }}>
          <div style={{backgroundColor:"rgb(166,0,88)",padding:"1rem"}}><h1 style={{
              fontSize: "2rem",
              color: "#fff"
        }}>Natural Dyeing</h1><br/>
          <div className="row" >
                <div className="column">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "0rem"
                }}>
                  The natural-dye practice involves chemistry, spiritual beliefs, and a deep understanding of the forces of nature. The shades of color a plant gives can vary greatly depending on where it was grown and whether the plant received enough water for the season—which makes the hue a living imprint of that particular season. This is how we know that nature is divine and that the plants are alive, just like us. It can take a lifetime to understand the depth of this practice.</p>
                </div>
                <div className="column">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "0rem"
              }}>The Zapotec have been coloring yarns with natural dyes for thousands of years. However, this practice was threatened by the introduction of synthetic dyes, which enabled weavers to produce textiles more quickly for a growing commercial market. Over time, many Zapotec villages abandoned the more labor-intensive tradition of working with plants, minerals, and insects. While less expensive and easier to use then natural dyes, chemical dyes can also be highly toxic, particularly in large amounts. They present a threat to the </p>
                </div>
                <div className="column">
                    <p style={{
                    fontSize: "1rem",
                    fontFamily: "myriad-pro",
                    padding: "0rem"
              }}>health of the dyers who use them and to the environment when they are disposed of in the ground or in water systems.<br></br><br></br>Today, only a few families in Teotitlán del Valle continue the ancient tradition of producing and using natural dyes. I am working to preserve this knowledge through my studio’s work and by teaching others. By reviving this tradition, my family and I are helping to preserve Zapotec identity and the environment.</p>
                </div>
            </div>
            </div>
      </div>




      <Modal2 show={show} onClose={() => setShow(false)}>
      <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" >
            <div style={{margin:"0rem 6rem 0 6rem", padding:"4rem" ,fontSize:"1.2rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>Blue dye hues are made from the indigo plant (Indigofera tinctoria), also called añil in Spanish. It is one of the more complicated dyes to prepare. For the Porfirio Gutiérrez studio, we usually buy dehydrated indigo cake from the last few families in Oaxaca who grow and process the indigo plants. We grind the indigo and put it in a clay pot with water and various ingredients. For indigo to produce the blue color, it needs a high (basic or alkaline) pH which is achieved by adding wood ash. We also add muicle(Justiciar spicigera), a reduction agent. This liquid is left to ferment for at least five days before it is ready to dye the yarn various shades of blue.</div>
            <div style={{padding:"5rem 6rem 0 10rem",fontSize:"1rem",fontFamily:"myriad-pro"}}>Juana Gutiérrez Contreras grinds indigo into a<br></br> powder to make the dye.<br></br>Joe Coca, photographer, 2019</div>
            </div>
            <div className="column2">
                <img
                src={Icon1}
                alt="Developer"
                style={{width:"66%",marginLeft:"20%"}}
            />
            </div>

          </div>
        </div>
      </Modal2>


      <Modal2 show1={show1} onClose={() => setShow1(false)}>
        <div style={{paddingLeft:"15rem"}}>
            <div style={{color:"#fff",fontFamily:"cursive"}}><div style={{color:"#fff",marginLeft:"5rem",padding:"3rem 3rem 3rem 12rem",fontFamily:"cursive",fontSize:"1.5rem"}}>“The dye plants that come from the earth <br></br>are the soul of my artwork.” <br></br><p style={{fontFamily:"cursive", paddingLeft:"14rem"}}>Porfirio Gutierrez</p></div></div>
          <img
            src={Icon2}
            alt="Developer"
            style={{width:"70%",margin:"0 0 0 5rem"}}
          />
        </div>
      </Modal2>

      <Modal2 show2={show2} onClose={() => setShow2(false)}>
        <div className="content" style={{marginLeft:"19rem"}}>
          <div className="pic" style={{margin:"2rem 0 0 2rem",color:"#fff",fontFamily:"cursive", fontSize:"1.5rem"}}>
          “Through my practice of working with natural dyes,<br></br> my life is shaped by my values.” <br></br><br></br><p style={{fontFamily:"cursive", paddingLeft:"20rem"}}>Porfirio Gutierrez</p>
          </div>
          <div className="pic" style={{margin:"40rem 0 0 35rem",fontSize:"0.75rem",backgroundColor:"transparent"}}>Porfirio Gutiérrez with dyed skeins of yarn.<br></br> Javier Lazo Gutiérrez, photographer, 2019 </div>
          <img
            src={Icon3}
            alt="Developer"
            style={{width:"60%"}}
          />
        </div>
      </Modal2>
      <Modal2 show3={show3} onClose={() => setShow3(false)}>
      <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" >
            <div style={{margin:"0rem 5rem 0 5rem", padding:"2rem" ,fontSize:"1.1rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>Cochineal dye has been widely used in Saltillo sarapes to create brilliant red weavings, in many different hues, that are considered some of the finest textiles in the world. The dye is derived from the dried bodies of tiny female cochineal (Dactylopius coccus) insects that live and feed on the nopal (prickly pear cactus).<br></br><br></br> Cochineal has been cultivated in Mexico, Central America, and South America for thousands of years. In ancient Mexico, it was used not only in the arts but also in medicine and ceremonies, especially in burial rites. The Aztecs demanded cochineal as tribute from the many areas they ruled over, including Mitla and Monte Albán. Spaniards first encountered it in Aztec markets, compressed into bars, either pure or mixed with chalk.<br></br><br></br> The red and burgundy from cochineal dyes are extremely important, symbolic colors in the Zapotec ceremonial procession that takes place during various celebrations. In the community procession, women wear an enredo, a red/burgundy textile wrapped around the waist like a skirt and held with a sash. </div>
            <div style={{padding:"1rem 6rem 0 7rem",fontSize:"1rem",fontFamily:"myriad-pro"}}>Indigenous man using a deer’s tail to scrape cochineal off of a nopal pad.<br></br>Memoria sobre la Naturaleza, Cultivo, y Beneficio de la Grana, Mexico City, 1777<br></br> Photograph of Ayer Ms. 1031, plate 7<br></br>Edward E. Ayer Manuscript Collection<br></br>Newberry Library, Chicago</div>
            </div>
            <div className="column2">
                <img
                src={Icon4}
                alt="Developer"
                style={{width:"65%",marginLeft:"20%"}}
            />
            </div>

          </div>
        </div>
      </Modal2>
      <Modal2 show4={show4} onClose={() => setShow4(false)}>
      <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" >
            <div style={{padding:"0 6rem 0 7rem",fontSize:"1.1rem",fontFamily:"cursive"}}>“There is no true soul in a commercially produced piece. It becomes a product. The weavers who adopted these new ways of producing textiles lost touch with our tradition. They are not honoring our ancestors through their techniques and methods. It’s about the way the whole piece is being created.” <br></br><br></br> <p style={{paddingLeft:"23rem", fontFamily:"cursive"}}>Porfirio Gutierrez</p></div>
            <div style={{margin:"1rem 5rem 2rem 5rem", padding:"2rem" ,fontSize:"1rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>In the 1960s, our weaving tradition underwent a major transformation when the commercial market began to encourage the use of colors created from chemical dyes, faster production, cheaper prices, and repetitive designs. The demands of this market caused many weavers to replace their traditional practices with these new faster ways of making textiles. This created a disconnect from our Zapotec values and beliefs.<br></br><br></br>It can take up to five months for some plants to mature or for trees to bear fruit, and for insects to be ready to harvest. Collecting the plant, dehydrating it, preparing the yarn, dyeing the yarn, and the final washing can take about two weeks. Creating colors from nature is labor intensive and costly. That is what makes our artwork extremely rare.<br></br><br></br> The commercial market calls the weavings we traditionally used in everyday life and in ceremonies “rugs.” Considering them simply commodities inspired their mass production. To me, this is an insult to our culture and to the great master weavers and dyers before us. To me, our weavings are art, a medium in which I can express my concerns and narrate our deep, rich Zapotec culture.</div>
            </div>
            <div className="column2">
                <img
                src={Icon5}
                alt="Developer"
                style={{width:"65%",marginLeft:"20%"}}
            />
            </div>

          </div>
        </div>
      </Modal2>
      <Modal2 show5={show5} onClose={() => setShow5(false)}>
        <div style={{alignItems:"center"}}>
          <img
            src={Icon6}
            alt="Developer"
            style={{width:"90%",margin:"0 0 0 5rem"}}
          />
          <div style={{color:"#fff",margin:"0 0 0 5rem"}}>Drying yarn.<br></br> Soraya Matos, photographer, 2018</div>
        </div>
      </Modal2>
      <Modal2 show6={show6} onClose={() => setShow6(false)}>
      <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" style={{width:"37%"}}>
            <div style={{margin:"0rem 6rem 0 6rem", padding:"2rem" ,fontSize:"1rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>Spanish colonizers saw beauty, as well as economic potential, in the red dye produced from the cochineal insect. This colorant, which creates many hues, had an immediate appeal in Europe. The export of cochineal from Mexico became a huge economic enterprise for the Spaniards. They established cochineal-production farms, called nopalries, and this native insect dye became the second most valuable export from the Americas. Oaxaca was one of the most important centers for its production.<br></br><br></br> The success of Spain’s cochineal market aroused intense jealousy among other European countries, which sent spies to discover the dye’s source. Eventually the cactus pads, with cochineal insects attached, were smuggled out of Mexico. By the time of Mexico’s war for independence (1810–1821), the country had lost its monopoly on the cochineal trade. However, it remained a part of Mexico’s economy until the 1860s, when new synthetic dyes became available.</div>
            </div>
            <div className="column2" style={{width:"63%"}}>
                <img
                src={Icon7}
                alt="Developer"
                style={{width:"90%",marginLeft:"0%"}}
            />
            </div>
            <div style={{padding:"0 6rem 0 60rem",fontSize:"0.75rem",fontFamily:"myriad-pro", color:"#fff"}}>Cochineal production at the town of Guaspaltepeque, Oaxaca<br></br>From Dr. William Houston’s letter to Sir Han Sloane, December 9, 1730 <br></br>Royal Society Register Book Original, RS.9825, Vol. 16, 1731–1732<br></br>The Royal Society</div>

          </div>
        </div>
      </Modal2>
      <Modal2 show7={show7} onClose={() => setShow7(false)}>
      <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" >
            <div></div>
            <div style={{padding:"34rem 7rem 0 8rem",fontSize:"1rem",fontFamily:"myriad-pro"}}>Using a mano and metate, cochineal is crushed into a fine powder. To make dye, it will be combined with water and possibly other minerals.<br></br>  Joe Coca, photographer, 2019</div>
            </div>
            <div className="column2">
                <img
                src={Icon8}
                alt="Developer"
                style={{width:"65%",marginLeft:"20%"}}
            />
            </div>

          </div>
        </div>
      </Modal2>
      <Modal2 show8={show8} onClose={() => setShow8(false)}>
      <div className="content1">
          {/* <img
            src={Icon5}
            alt="Developer"
          /> */}
          {/* <div className="text"> */}
            <div className="row" style={{backgroundColor:"rgb(166,0,88)", margin:"0 6rem 2rem 6rem"}}>
                <div className="column3">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1rem"
                }}>
                  I inherited the deep artistic traditions and our rich cultural identity from our ancestors, the Zapotec civilization. In my family, we learned our weaving and natural-dyeing practices at a very early age and forged our identities within that artistic expression. Our lives are shaped by our values, which are inherently linked to our</p>
                </div>

                <div className="column3">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1rem"
              }}>practice of working with natural dyes and weaving. <br></br><br></br>When born into a tradition, it is expected that one will follow that path. I do not work with natural dyes simply because I was born into the tradition, or because there is money to be made, or because it is a trend. I </p>
                </div>

                <div className="column3">
                    <p style={{
                    fontSize: "1rem",
                    fontFamily: "myriad-pro",
                    padding: "1rem"
              }}>work with natural dyes because I discovered my gift and calling within our traditional practice and developed a profound connection with Mother Earth.<br></br><br></br>Through my teaching, I aim to bring awareness of traditional wisdom and values. </p>
                </div>
                <div className="column3">
                    <p style={{
                    fontSize: "1rem",
                    fontFamily: "myriad-pro",
                    padding: "1rem"
              }}>It is extremely important for the students to understand the meaning and responsibility of working with natural dyes according to our cultural values and beliefs. This is the first step to eventually creating colors. My goal is to confront the disconnect that exists between the object and the culture that nurtures its creation. </p>
                </div>
            </div>
            <div className="">
                <div className="">
                    <img
                        src={Icon9}
                        alt="Developer"
                        style={{width:"80%",marginLeft:"9rem"}}
                    />
                </div>
            </div>
            
            <div className="quoteDiv" style={{color:"#fff",marginLeft:"7rem"}}>Juana Gutiérrez Contreras pulling yarn from the dye pot. Cochineal produced the red color.<br></br>Joe Coca, photographer, 2019</div>
        </div>
      </Modal2>
      <Modal2 show10={show10} onClose={() => setShow10(false)}>
        <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" >
            <div style={{margin:"0rem 6rem 0 6rem", padding:"2rem" ,fontSize:"1.2rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>The life cycles of the cochineal insect and the pad of the nopal (prickly pear) are both approximately three to four months. In each cycle, new nopal pads— infested with cochineal— must be collected and then and hung up. About 1,000 nopal pads are required to harvest 1 kilo (2.2 pounds) of cochineal to use for dye. <br></br><br></br>At my studio, we farm only a small amount of cactus and produce a small number of cochineal insects. This is not enough for our usage of about 30 kilos (66 pounds) a year. In order to produce this much, we work collaboratively with other families who specialize in cultivating cochineal. They devote their lives to this practice. <br></br><br></br>As we preserve and sustain our art form, we are also honored to be contributing to many others’ livelihoods and the preservation of their traditional practices as well. While farming cactus and cochineal are extremely labor intensive and complex, I feel very blessed and honored to be part of this legacy.</div>
            <div style={{padding:"1rem 6rem 0 8rem",fontSize:"1rem",fontFamily:"myriad-pro"}}>Front and back views of male and female cochineal insects José Antonio de Alzate y Ramirez<br></br>Memoria sobre la naturaleza, Cultivo, y Beneficio de la Grana, Mexico City, 1777 <br></br>Edward E. Ayer Manuscript Collection, Ayers Ms. 1031, plate 1<br></br>Newberry Library, Chicago</div>
            </div>
            <div className="column2">
                <img
                src={Icon10}
                alt="Developer"
                style={{width:"60%",marginLeft:"20%"}}
            />
            </div>

          </div>
        </div>
      </Modal2>

      <Modal2 show9={show9} onClose={() => setShow9(false)}>
        <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" >
            <div style={{margin:"0rem 6rem 0 6rem", padding:"2rem" ,fontSize:"1.2rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>The life cycles of the cochineal insect and the pad of the nopal (prickly pear) are both approximately three to four months. In each cycle, new nopal pads— infested with cochineal— must be collected and then and hung up. About 1,000 nopal pads are required to harvest 1 kilo (2.2 pounds) of cochineal to use for dye. <br></br><br></br>At my studio, we farm only a small amount of cactus and produce a small number of cochineal insects. This is not enough for our usage of about 30 kilos (66 pounds) a year. In order to produce this much, we work collaboratively with other families who specialize in cultivating cochineal. They devote their lives to this practice. <br></br><br></br>As we preserve and sustain our art form, we are also honored to be contributing to many others’ livelihoods and the preservation of their traditional practices as well. While farming cactus and cochineal are extremely labor intensive and complex, I feel very blessed and honored to be part of this legacy.</div>
            <div style={{padding:"1rem 6rem 0 8rem",fontSize:"1rem",fontFamily:"myriad-pro"}}>Front and back views of male and female cochineal insects José Antonio de Alzate y Ramirez<br></br>Memoria sobre la naturaleza, Cultivo, y Beneficio de la Grana, Mexico City, 1777 <br></br>Edward E. Ayer Manuscript Collection, Ayers Ms. 1031, plate 1<br></br>Newberry Library, Chicago</div>
            </div>
            <div className="column2">
                <img
                src={Icon10}
                alt="Developer"
                style={{width:"60%",marginLeft:"20%"}}
            />
            </div>

          </div>
        </div>
      </Modal2>
      
    </React.Fragment>
  );
    // const [isOpen, setIsOpen] = useState(false);
}

export default DyeingPage;
