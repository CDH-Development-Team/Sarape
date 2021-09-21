
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import History from '../components/History';
import FamilyMosaic from '../components/FamilyMosaic';
import Modal2 from '../components/Modal2/modal2';
// import React, { useState } from "react";
import "./styles.css";
import Button from '../components/button/Button';

import Icon1 from "../images/5B4_Bobbins by Craig Holmes.jpg";
import Icon2 from "../images/PGOAX82718-0242.jpg";
import Icon3 from "../images/5A2_Porfirio_Gutierrez_by_recker.jpg";
import Icon4 from "../images/Teotitlan shoot-by nikhol esteras.jpg";
import Icon5 from "../images/5A1_Parents by Javier Lazo.jpg";
import Icon6 from "../images/5B2_08-09-18 The Big Boys a.jpg";
import Icon7 from "../images/By Alana Coghlan.jpg";
import Icon8 from "../images/5A3_Familia.jpg";
import { GeographyContainer, MosaicWrapper, MosaicImg, HeaderText, GeographyEntry, GeographyEntryText, GeographyEntryImg, GeographyEntryDescription, GeographyStatues, Statue, StatueImg, BackgroundDiv, BackgroundContentLeft, BackgroundContentRight, BackgroundImg, HistoryMosaicParent, HistoryMosaicParent2, HistoryMosaic1, HistoryMosaic2, HistoryMosaic3, HistoryMosaic4, HistoryMosaic5, HistoryMosaic6, HistoryMosaic7, HistoryMosaic8, HistoryMosaic9, HistoryMosaic10, HistoryMosaic11, HistoryMosaic12, HistoryMosaic13, HistoryMosaic14,HistoryMosaic15, HistoryMosaic16,HistoryMosaic17, HistoryMosaic18, HistoryMosaic19, HistoryMosaic20, HistoryMosaic21} from '../components/Geography/geographyElements.js';
import Color1 from '../images/section 2/color1.png'
import "../components/Geography/geography.css";
import useWindowDimensions from '../components/Geography/dimensions';


const FamilyPage = () => {
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
        <HistoryMosaic1 className="mosaic">
        <img src={Icon1} height={"100%"} width={"100%"} onClick={() => setShow(true)}></img>
        </HistoryMosaic1>

        {/* <HistoryMosaic2 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic2> */}
        <HistoryMosaic17 className="mosaic">
        <img src={Icon2} height={"100%"} width={"100%"} onClick={() => setShow6(true)}></img>
        </HistoryMosaic17>
        {/* <HistoryMosaic4 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic4 >
        <HistoryMosaic5 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic5 > */}
        <HistoryMosaic15 className="mosaic">
        <img src={Icon6} height={"100%"} width={"100%"} onClick={() => setShow7(true)}></img>
        </HistoryMosaic15>

        {/* <HistoryMosaic7 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"}></img>
        </HistoryMosaic7> */}

        <HistoryMosaic16 className="mosaic">
        <img src={Icon4} height={"100%"} width={"100%"} onClick={() => setShow1(true)}></img>
        </HistoryMosaic16>
{/* 
        <HistoryMosaic9 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"}></img>
        </HistoryMosaic9> */}

        <HistoryMosaic18 className="mosaic">
        <img src={Icon3} height={"100%"} width={"100%"}></img>
        </HistoryMosaic18>

        {/* <HistoryMosaic11 className="mosaic">
        <img src={Icon4} height={"100%"} width={"100%"} onClick={() => setShow3(true)}></img>
        </HistoryMosaic11> */}

        <HistoryMosaic19 className="mosaic">
        <img src={Icon7} height={"100%"} width={"100%"} onClick={() => setShow2(true)}></img>
        </HistoryMosaic19>

        <HistoryMosaic20 className="mosaic">
        <img src={Icon8} height={"100%"} width={"100%"} onClick={() => setShow2(true)}></img>
        </HistoryMosaic20>
        <HistoryMosaic21 className="mosaic">
        <img src={Icon5} height={"100%"} width={"100%"} onClick={() => setShow2(true)}></img>
        </HistoryMosaic21>

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
          padding: "5rem"
        }}>
          <h1 style={{
              fontSize: "2rem",
              color: "#fff"
        }}>Family and Philosophy</h1><br/>
          <div className="row1" >
                <div className="column1" style={{
              fontSize: "1rem",
              fontFamily:"myriad-pro",
              color: "#fff"
        }}>
                My parents are the third generation of dyers and weavers in our family, which makes my siblings and me the fourth generation of weavers. As newlyweds, the first things your parents usually give you are a loom, a spinning wheel, and enough materials to start a studio, so you can feed your family. However, since my grandparents passed away before my parents got married, they had to figure it all out themselves.
                </div>
                <div className="column1" style={{
              fontSize: "1rem",
              fontFamily:"myriad-pro",
              color: "#fff"
        }}>
                My parents have always worked collaboratively to create each piece—from cleaning wool, spinning it, collecting the plants for dyeing, dyeing the wool, to weaving. To execute a piece, my mom does the carding and spinning, and my dad weaves. They loved working at night because night brings calmness and concentration. This is how they raised eleven kids. They always say that they are blessed that their humble work as artisans enabled them to raise their kids.
                </div>
            </div>
      </div>




      <Modal2 show={show} onClose={() => setShow(false)}>
        <div className="content">
          <img
            src={Icon1}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <br/>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show1={show1} onClose={() => setShow1(false)}>
        <div className="content">
          <img
            src={Icon2}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Whatever
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show2={show2} onClose={() => setShow2(false)}>
        <div className="content">
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div
            style={{
                fontSize: "1.1rem",
                fontFamily: "cursive",
                padding: "1.3rem"
              }}>
            Preservation, education, and sustainability are all extremely important. They are my studio’s foundation for the future.   
            <br/><br/><div style={{
                alignItems: "left"
              }}>
                <p style={{
                paddingLeft: "11rem",
                fontFamily: "cursive"
              }}>Porfirio Gutierrez</p></div>
            </div>
            <div
            style={{
                fontSize: "0.75rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>
            About nineteen years ago, I started my own studio involving my family and community. Our mission is to preserve and uplift our historically significant natural-dye practices. Our parents’ humble beginnings have grown into what is now Porfirio Gutiérrez Studio, with a team of thirty-five people who are mostly women. In addition, we work closely with cochineal and indigo farmers, spinners, and others who help with various essentials. About eighty people benefit from each textile that we sell. What started with two people working late to feed their family is now a large creative team trying to preserve our ancient traditions.
            </div>
            <br/>
            <div
            style={{
                fontSize: "0.75rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>
            Porfirio Gutiérrez with a  full of pericón to use for making a yellow dye. Pericón (Tagetes lucida) is referred to as both Mexican mint marigold and Mexican tarragon.<br/> Keith Recker, photographer, 2018
            </div>
          </div>
          <img
            src={Icon3}
            alt="Developer"
          />
        </div>
      </Modal2>
      <Modal2 show3={show3} onClose={() => setShow3(false)}>
        <div className="content">
          <img
            src={Icon4}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show4={show4} onClose={() => setShow4(false)}>
        <div className="content1">
          {/* <img
            src={Icon5}
            alt="Developer"
          /> */}
          {/* <div className="text"> */}
            <div className="row">
                <div className="column">
                    <p style={{
                fontSize: "0.75rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
                }}>
                  My parents are the third generation of dyers and weavers in our family, which makes my siblings and me the fourth generation of weavers. As newlyweds, the first things your parents usually give you are a loom, a spinning wheel, and enough materials to start a studio, so you can feed your family. However, since my grandparents passed away </p>
                </div>
                <div className="column">
                    <p style={{
                fontSize: "0.75rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>before my parents got married, they had to figure it all out themselves.<br/><br/>My parents have always worked collaboratively to create each piece—from cleaning wool, spinning it, collecting the plants for dyeing, dyeing the wool, to weaving. To execute a piece, my mom </p>
                </div>
                <div className="column">
                    <p style={{
                    fontSize: "0.75rem",
                    fontFamily: "myriad-pro",
                    padding: "1.3rem"
              }}>does the carding and spinning, and my dad weaves. They loved working at night because night brings calmness and concentration. This is how they raised eleven kids. They always say that they are blessed that their humble work as artisans enabled them to raise their kids.</p>
                </div>
            </div>
            <div className="row1">
                <div className="column1">
                    <img
                        src={Icon5}
                        alt="Developer"
                        style={{width:"100%",
                            height:"100%"}}
                    />
                </div>
                <div className="column1">
                    <img
                        src={Icon8}
                        alt="Developer"
                        style={{width:"100%",
                            height:"100%"}}
                    />
                </div>
            </div>
            
            <div className="quoteDiv"><p className="quote">“The greater being has given us the plants for food, dyes, and for medicine. Because they connect us to Mother Earth, they are a deep part of our body and our wellbeing. The wisdom to use them was inherited from our ancestors.”</p><p className="author"> Andrea Contreras</p></div>
        </div>
      </Modal2>
      <Modal2 show5={show5} onClose={() => setShow5(false)}>
        <div className="content">
          <img
            src={Icon6}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show6={show6} onClose={() => setShow6(false)}>
        <div className="content">
          <img
            src={Icon7}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show7={show7} onClose={() => setShow7(false)}>
      <div className="content1">
          {/* <img
            src={Icon5}
            alt="Developer"
          /> */}
          {/* <div className="text"> */}
            <div className="row">
                <div className="column">
                    <p style={{
                fontSize: "0.75rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>My parents are the third generation of dyers and weavers in our family, which makes my siblings and me the fourth generation of weavers. As newlyweds, the first things your parents usually give you are a loom, a spinning wheel, and enough materials to start a studio, so you can feed your family. However, since my grandparents passed away </p>
                </div>
                <div className="column">
                    <p style={{
                fontSize: "0.75rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>before my parents got married, they had to figure it all out themselves.<br/><br/>My parents have always worked collaboratively to create each piece—from cleaning wool, spinning it, collecting the plants for dyeing, dyeing the wool, to weaving. To execute a piece, my mom </p>
                </div>
                <div className="column">
                    <p style={{
                    fontSize: "0.75rem",
                    fontFamily: "myriad-pro",
                    padding: "1.3rem"
              }}>does the carding and spinning, and my dad weaves. They loved working at night because night brings calmness and concentration. This is how they raised eleven kids. They always say that they are blessed that their humble work as artisans enabled them to raise their kids.</p>
                </div>
            </div>
            <div className="row1">
                <div className="column1">
                    <img
                        src={Icon5}
                        alt="Developer"
                        style={{width:"100%",
                            height:"100%"}}
                    />
                </div>
                <div className="column1">
                    <img
                        src={Icon8}
                        alt="Developer"
                        style={{width:"100%",
                            height:"100%"}}
                    />
                </div>
            </div>
            
            <div className="quoteDiv"><p className="quote">“The greater being has given us the plants for food, dyes, and for medicine. Because they connect us to Mother Earth, they are a deep part of our body and our wellbeing. The wisdom to use them was inherited from our ancestors.”</p><p className="author"> Andrea Contreras</p></div>
        </div>
      </Modal2>
    </React.Fragment>
  );
    // const [isOpen, setIsOpen] = useState(false);
}

export default FamilyPage;
