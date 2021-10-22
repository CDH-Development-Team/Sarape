
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



import fc from "../images/fc.png";
import fc1 from "../images/fc1.png";
import fc2 from "../images/fc2.png";
import fc3 from "../images/fc3.png";
import fc4 from "../images/fc4.png";
import fc5 from "../images/fc5.png";

import { GeographyContainer, MosaicWrapper, MosaicImg, HeaderText, GeographyEntry, GeographyEntryText, GeographyEntryImg, GeographyEntryDescription, GeographyStatues, Statue, StatueImg, BackgroundDiv, BackgroundContentLeft, BackgroundContentRight, BackgroundImg, HistoryMosaicParent, HistoryMosaicParent2,
  HistoryMosaic1, HistoryMosaic2, HistoryMosaic3, HistoryMosaic4, HistoryMosaic5, HistoryMosaic6, HistoryMosaic7, HistoryMosaic8, HistoryMosaic9, HistoryMosaic10, HistoryMosaic11, 
  HistoryMosaic12, HistoryMosaic13, HistoryMosaic14,HistoryMosaic15, HistoryMosaic16,HistoryMosaic17, HistoryMosaic18, HistoryMosaic19, HistoryMosaic20, HistoryMosaic21,
  FC,FC1,FC2,FC3,FC4,FC5} from '../components/Geography/geographyElements.js';
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
        <img src={Icon2} height={"100%"} width={"100%"} onClick={() => setShow1(true)}></img>
        </HistoryMosaic17>
        {/* <HistoryMosaic4 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic4 >
        <HistoryMosaic5 className="mosaic">
        <img src={Color1} height={"100%"} width={"100%"} ></img>
        </HistoryMosaic5 > */}
        <HistoryMosaic18 className="mosaic">
        <img src={Icon3} height={"100%"} width={"100%"} onClick={() => setShow2(true)}></img>
        </HistoryMosaic18>

        <HistoryMosaic16 className="mosaic">
        <img src={Icon4} height={"100%"} width={"100%"} onClick={() => setShow3(true)}></img>
        </HistoryMosaic16>


        <HistoryMosaic21 className="mosaic">
        <img src={Icon5} height={"100%"} width={"100%"} onClick={() => setShow4(true)}></img>
        </HistoryMosaic21>

        <HistoryMosaic15 className="mosaic">
        <img src={Icon6} height={"100%"} width={"100%"} onClick={() => setShow5(true)}></img>
        </HistoryMosaic15>

        <HistoryMosaic19 className="mosaic">
        <img src={Icon7} height={"100%"} width={"100%"} onClick={() => setShow6(true)}></img>
        </HistoryMosaic19>

        <HistoryMosaic20 className="mosaic">
        <img src={Icon8} height={"100%"} width={"100%"} onClick={() => setShow4(true)}></img>
        </HistoryMosaic20>

        <FC className="mosaic">
        <img src={fc} height={"100%"} width={"100%"} ></img>
        </FC>
        <FC1 className="mosaic">
        <img src={fc1} height={"100%"} width={"100%"}></img>
        </FC1>
        <FC2 className="mosaic">
        <img src={fc2} height={"100%"} width={"100%"}></img>
        </FC2>
        <FC3 className="mosaic">
        <img src={fc3} height={"100%"} width={"100%"}></img>
        </FC3>
        <FC4 className="mosaic">
        <img src={fc4} height={"100%"} width={"100%"}></img>
        </FC4>
        <FC5 className="mosaic">
        <img src={fc5} height={"100%"} width={"100%"}></img>
        </FC5>

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
          <div style={{padding:"2rem"}}>
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
      </div>




      <Modal2 show={show} onClose={() => setShow(false)}>
        <div className="content" >
          <div style={{overflow:"hidden"}}><img
            src={Icon1}
            alt="Developer"
            style={{height:"70%"}}
          />
          <div style={{color:"#fff",paddingLeft:"50rem"}}>Bobbins of spun, dyed wool ready to use.<br></br>Craig Holmes, photographer, 2018</div>
          </div>
          <div className="text" style={{width:"70%",backgroundColor:"rgb(166,0,88)"}}>
            {/* <h2>John Doe</h2> */}
            <div>
            When the wool is dry, it is combed with carding paddles, which are like large hairbrushes with metal bristles. This helps to further clean, as well as align, the fibers for spinning into yarn. The fiber is removed from the carding paddles in one fluffy piece. That piece is then folded in half lengthwise and torn down the middle, just short of tearing the whole piece in half. The result is one long strip with the fibers all combed in the same direction. This facilitates spinning it into yarn.
            </div>
            <br/>
            <div>
            The art of spinning wool takes years to master. Wool’s width, texture, and tensile strength can vary greatly. When weaving a piece, all the different colors of yarn usually need to be made to the same specifications. We use a manually powered wooden spinning wheel to transform the wool into yarn. It is then naturally dyed before using the spinning wheel to roll yarn from a ball into a large loop to be placed over the biilieelii, a rotating device used to feed the yarn onto a bobbin. Other materials used in our studio include ixtle (agave fiber), palm leaves, recycled copper thread, and machine-spun wool yarn. 
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show1={show1} onClose={() => setShow1(false)}>
      <div className="content">
          <div className="row1">
            {/* <h2>John Doe</h2> */}
            <div className="column2" style={{width:"37%"}}>
            <div style={{margin:"0rem 6rem 0 6rem", padding:"2rem" ,fontSize:"1rem",fontFamily:"myriad-pro",backgroundColor:"rgb(166,0,88)"}}>Biodiversity is endangered due to climate change. We experience these changes firsthand. During our last harvest in Teotitlán, we did not get enough rain. Most of the essential crops we use are either farmed without irrigation systems or grow wild in the mountains. We know the cycles of rainy and dry seasons, and plant in harmony with those times. However, this year the rains did not come. We had weeks of dry weather, and when the rains did finally come, it was too late for the corn harvest.<br></br><br></br>The harvest of indigo for this year was about a quarter of last year’s, which was a bad year for the plant. Without this plant, there will simply be no blue colors in our weavings. We always pay respect to Mother Earth by only taking what we need. Before we collect the plants, we give thanks to the greater being. To us, these plants are as important as food or medicine. Natural dye is not a trend for us; it is our way of life and our legacy.<br></br><br></br>This reality has inspired me to purchase a piece of land where we can grow our own plants for a more sustainable practice. In addition to natural-dye plants, we will grow medicinal plants that will enable my mother and brother to continue practicing traditional medicine. Our new garden will also serve as a place where young weavers from our community can come and learn about their legacy, as well as where dialogue and exchange can take place between our practice and interested people from around the world. This will be the way to document and preserve our cultural heritage for future generations. </div>
            </div>
            <div className="column2" style={{width:"63%"}}>
                <div><img
                src={Icon2}
                alt="Developer"
                style={{width:"80%",marginLeft:"0%"}}
            /></div>
            <div style={{padding:"0rem 6rem 0 0rem",fontSize:"1.35rem",fontFamily:"cursive", color:"#fff",width:"85%"}}>“The plants and trees are alive, just like us; we cannot hurt them nor cut them for any reason. We are supposed to only take what we need from nature.”<br></br><br></br><p style={{paddingLeft:"30rem",fontFamily:"cursive"}}>Amado Gutiérrez</p></div>
            </div>
            

          </div>
        </div>
      </Modal2>
      <Modal2 show2={show2} onClose={() => setShow2(false)}>
        <div className="content">
          <div className="text" style={{width:"30%", marginLeft:"12rem"}}>
            {/* <h2>John Doe</h2> */}
            <div
            style={{
                fontSize: "1.1rem",
                fontFamily: "cursive",
                padding: "1.3rem",
                backgroundColor:"rgb(166,0,88)"
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
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem",
                backgroundColor:"rgb(166,0,88)",
                marginTop:"1rem"
              }}>
            About nineteen years ago, I started my own studio involving my family and community. Our mission is to preserve and uplift our historically significant natural-dye practices. Our parents’ humble beginnings have grown into what is now Porfirio Gutiérrez Studio, with a team of thirty-five people who are mostly women. In addition, we work closely with cochineal and indigo farmers, spinners, and others who help with various essentials. About eighty people benefit from each textile that we sell. What started with two people working late to feed their family is now a large creative team trying to preserve our ancient traditions.
            </div>
            <br/>
            <div
            style={{
                fontSize: "0.8rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>
            Porfirio Gutiérrez with a  full of pericón to use for <br></br>making a yellow dye. Pericón (Tagetes lucida) is <br></br>referred to as both Mexican mint marigold and <br></br>Mexican tarragon.<br/> Keith Recker, photographer, 2018
            </div>
          </div>
          <img
            src={Icon3}
            style={{height:"60%",width:"40%",alignItems:"right"}}
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
          <div className="pic" style={{width:"25.09%",marginLeft:"4rem",color:"#fff",fontSize:"1.1rem"}}>Sheep are usually sheared once a year. Over the course of a year, their coats gather burrs, plant matter, and dirt. Even though wool naturally repels impurities, it must be thoroughly cleaned and carded before being spun into yarn. Often, my mother says that water is alive with tremendous force; in her healing process, she works in harmony with this force. This makes me realize that the process of washing raw wool is also a ceremony.<br></br><br></br>Separating, cleaning, and washing raw wool are labor intensive. The first step is to open up and separate the matted fibers. Larger pieces of foreign matter are picked out by hand, and compacted wool is “fluffed” to make washing more effective. After this preliminary cleaning process, the wool is loaded into reed baskets and taken to the river to be washed. It is put in a tub, and a lather is worked up, using river water. After the dirt is loosened, the wool is put into a hamper-sized reed basket and washed again using the ribbed sides of the basket as a washboard. There is just enough space between the reeds to allow the river water to stream through, rinsing away the dirt without losing much wool.<br></br><br></br>Once the wool is clean, the basket is pulled from the river and set on the bank until the excess water runs off. The wet wads of newly washed wool are laid out to dry on large rocks. After the excess water has seeped out, the wool is placed into the baskets and taken home. In the courtyard, we place the wool on petate (woven palm fiber) mats to dry completely. </div>
        </div>
        <div style={{color:"#fff", padding:"1rem 0 0 60rem"}}>Andrea Contreras preparing cleaned wool for spinning.<br></br>Nikhol Esterás, photographer, 2017</div>
      </Modal2>
      <Modal2 show4={show4} onClose={() => setShow4(false)}>
        <div className="content1">
          {/* <img
            src={Icon5}
            alt="Developer"
          /> */}
          {/* <div className="text"> */}
            <div className="row" style={{backgroundColor:"rgb(166,0,88)",margin:"2rem"}}>
                <div className="column">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
                }}>
                  My parents are the third generation of dyers and weavers in our family, which makes my siblings and me the fourth generation of weavers. As newlyweds, the first things your parents usually give you are a loom, a spinning wheel, and enough materials to start a studio, so you can feed your family. However, since my grandparents passed away </p>
                </div>
                <div className="column">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>before my parents got married, they had to figure it all out themselves.<br/><br/>My parents have always worked collaboratively to create each piece—from cleaning wool, spinning it, collecting the plants for dyeing, dyeing the wool, to weaving. To execute a piece, my mom </p>
                </div>
                <div className="column">
                    <p style={{
                    fontSize: "1rem",
                    fontFamily: "myriad-pro",
                    padding: "1.3rem"
              }}>does the carding and spinning, and my dad weaves. They loved working at night because night brings calmness and concentration. This is how they raised eleven kids. They always say that they are blessed that their humble work as artisans enabled them to raise their kids.</p>
                </div>
            </div>
            <div className="row1" style={{marginLeft:"3rem"}}>
                <div className="column1">
                    <img
                        src={Icon5}
                        alt="Developer"
                        style={{width:"90%"}}
                    />
                </div>
                <div className="column1">
                    <img
                        src={Icon8}
                        alt="Developer"
                        style={{width:"90%"}}
                    />
                </div>
            </div>
            
            <div className="quoteDiv"><p className="quote">“The greater being has given us the plants for food, dyes, and for medicine. Because they connect us to Mother Earth, they are a deep part of our body and our wellbeing. The wisdom to use them was inherited from our ancestors.”</p><p className="author"> Andrea Contreras</p></div>
        </div>
      </Modal2>
      <Modal2 show5={show5} onClose={() => setShow5(false)}>
        <div className="content1">
          <div className="row" >
                <div className="column5">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
                }}>
                  Churro sheep were introduced to the northern reaches of New Spain by Spanish colonizer Francisco Vázquez de Coronado in 1521. Weavers quickly adopted Churro wool and continue to prize it today.<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <br></br>Three male Navajo Churro sheep, Spin Dance Acres, <br></br>Boise, ID. <br></br>Bonnie Barcus, photographer, 2018 </p>
                </div>
                <div className="column4">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}><img
              src={Icon6}
              alt="Developer"
              style={{width:"100%"}}
              /></p>
                </div>
            </div>
            <div className="row" style={{backgroundColor:"rgb(166,0,88)", margin:"0 6rem 2rem 6rem"}}>
                <div className="column3">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1rem"
                }}>
                  Sheep are very special to my practice. Sheep’s wool comes in a variety of colors, ranging from white and light creams to tans, browns, and black. For dyeing yarn, white wool is the most desirable. Darker wool is also dyed, with beautiful results, but this cannot be achieved solely using natural dyes. Blending two</p>
                </div>

                <div className="column3">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1rem"
              }}>or more colors of wool when carding gives a textured look to a yarn. Before we have wool to dye, though, the sheep must be sheared and their wool must be washed, carded (combed), and spun.<br></br><br></br>My mother has been washing, carding, and spinning yarn </p>
                </div>

                <div className="column3">
                    <p style={{
                    fontSize: "1rem",
                    fontFamily: "myriad-pro",
                    padding: "1rem"
              }}>since she was a young girl. She learned this skill at the knee of her mother, who was taught by her mother’s mother. Now in her late seventies, she concentrates more on grooming each piece, the final steps before presenting the textiles to the public. Today, we focus on the process of natural dyeing and weaving </p>
                </div>
                <div className="column3">
                    <p style={{
                    fontSize: "1rem",
                    fontFamily: "myriad-pro",
                    padding: "1rem"
              }}>of textiles. We collaborate with other families in a nearby community to help with the washing, carding, and spinning of raw wool. In this way, we are contributing to other families’ livelihood as well as the preservation of their traditional practices. </p>
                </div>
            </div>
        </div>
      </Modal2>
      <Modal2 show6={show6} onClose={() => setShow6(false)}>
      <div className="content1">
          <div className="row" >
                
                <div className="column7">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}><img
              src={Icon7}
              alt="Developer"
              style={{width:"100%"}}
              /></p>
                </div>
                <div className="column6">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem",
                backgroundColor:"rgb(166,0,88)"
                }}>For me, natural dyeing is a spiritual process. We must be mindful that Mother Earth is a living being with a tremendous force. All elements used for natural dyes, traditional medicine, and foods are grown, thanks to the rain, soil, and other important resources provided by a greater being. All of these elements are alive, and without them, there would simply not be the hues you see in our textiles.<br></br><br></br>The colors that come from plants go beyond beauty; they are connected to a living source and work in harmony with the wisdom of the practitioner. These dye materials are sacred and precious. They connect me and my family to the great master dyers and weavers of the past, who started these practices thousands of years ago.<br></br><br></br>Our exposure to traditional knowledge gives us an understanding of about ten different color hues. We are continuously researching and experimenting with a diverse array of plants and fibers to create more hues. We have now developed more than two hundred different colors, all from natural sources. As a result, we have tremendous respect for and connection to Mother Earth, understanding her limitations and the limitations of the materials. 
                   </p>
                </div>
            </div>
            <div style={{color:"#fff", fontFamily:"cursive", padding:"4rem",fontSize:"1.6rem"}}>
            “When you work with nature respectfully, you do no harm. You do not need damaging chemicals. You do not need to harvest in ways that destroy. You do not hurt the environment and the world. I think this is what positive change is about: working in harmony with nature and working in ways that we can teach to young people, so that they can earn a living and keep our world healthy. I think I put those thoughts into all the colors we make, and into all the parts of my life.”<br></br><br></br><p style={{paddingLeft:"65rem",fontFamily:"cursive"}}>Juana Gutiérrez Cortreras</p>
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
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>My parents are the third generation of dyers and weavers in our family, which makes my siblings and me the fourth generation of weavers. As newlyweds, the first things your parents usually give you are a loom, a spinning wheel, and enough materials to start a studio, so you can feed your family. However, since my grandparents passed away </p>
                </div>
                <div className="column">
                    <p style={{
                fontSize: "1rem",
                fontFamily: "myriad-pro",
                padding: "1.3rem"
              }}>before my parents got married, they had to figure it all out themselves.<br/><br/>My parents have always worked collaboratively to create each piece—from cleaning wool, spinning it, collecting the plants for dyeing, dyeing the wool, to weaving. To execute a piece, my mom </p>
                </div>
                <div className="column">
                    <p style={{
                    fontSize: "1rem",
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
