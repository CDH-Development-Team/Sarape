
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Modal2 from '../components/Modal2/modal2';
// import React, { useState } from "react";
import "./styles.css";
import HistoricalSection from '../components/HistoricalTextiles/historicalTextiles';

import { sixObj, sixObjOne, sixObjTwo, sixObjThree} from '../components/HistoricalTextiles/historicalData';

import Icon1 from "../textiles_png/6_textiles/6A1_at_2020-15-1.png";
import Icon2 from "../textiles_png/6_textiles/6A2_at_2020-13-1.png";
import Icon3 from "../textiles_png/6_textiles/6A3_E-1642.png";
import Icon4 from "../textiles_png/6_textiles/6B1_19766_HIRES.png";
import Icon5 from "../textiles_png/6_textiles/6B2_12504.png";
import Icon6 from "../textiles_png/6_textiles/6B4_at_2020-15-2.png";
import Icon7 from "../textiles_png/6_textiles/6B5_E-4735.png";
import Icon8 from "../textiles_png/6_textiles/6C1_at_2020-13-2.png";
import Icon9 from "../textiles_png/6_textiles/6C2_at_2020-14-2.png";
import Icon10 from "../textiles_png/6_textiles/6C3_1980-2-53.png";


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
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
  return (
    <React.Fragment>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "45vh",
          backgroundColor: "#4a0033"
        }}
      >
        {/* <Button onClick={() => setShow(true)}>Open Modal</Button> */}
        <img
            src={Icon1}
            alt="Developer"
            onClick={() => setShow(true)}
            className='textile'
          />
          <img
            src={Icon2}
            alt="Developer"
            onClick={() => setShow1(true)}
          />
          <img
            src={Icon3}
            alt="Developer"
            onClick={() => setShow2(true)}
          />
          <img
            src={Icon4}
            alt="Developer"
            onClick={() => setShow3(true)}
          />
          <img
            src={Icon5}
            alt="Developer"
            onClick={() => setShow4(true)}
          />
          <img
            src={Icon6}
            alt="Developer"
            onClick={() => setShow5(true)}
          />
          <img
            src={Icon7}
            alt="Developer"
            onClick={() => setShow6(true)}
          />
          <img
            src={Icon8}
            alt="Developer"
            onClick={() => setShow7(true)}
          />
        <img
            src={Icon9}
            alt="Developer"
            onClick={() => setShow8(true)}
          />    
          <img
            src={Icon10}
            alt="Developer"
            onClick={() => setShow9(true)}
          />        
      </div>
      <div style={{
          textAlign: "center",
          backgroundColor: "#4a0033",
          color: "white",
          fontSize:"30px",
          
        }}>
      <h1>HISTORICAL TEXTILES 1750-1980</h1>
      </div>
      <Modal2 show={show} onClose={() => setShow(false)}>
        <div className="content">
          <img
            src={Icon1}
            alt="Developer"
          />
          
          <div className="text">
          <h2>Classic Period Saltillo Sarapes</h2>
          <br></br>
          <div>
          Classic period Saltillo sarape, c. 1720–1860 {<br></br>}  
          Mexico Wool, cotton, cochineal and other natural dyes{<br></br>}  
          On loan from Arizona History Museum, 92.28{<br></br>} 
          AT-2020-15-1
            </div>

            <br/>
            
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
          <h2>Classic Period Saltillo Sarapes</h2>
            <br></br>
            <div>
            Classic period Saltillo sarape, c. 1720–1860{<br></br>}
            MexicoWool, cotton, and indigo dye{<br></br>}
            On loan from Tom Kieft{<br></br>}
            AT-2020-13
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show2={show2} onClose={() => setShow2(false)}>
        <div className="content">
        <img
            src={Icon3}
            alt="Developer"
          />
          <div className="text">
          <h2>Classic Period Saltillo Sarapes</h2>
            <br></br>
            <div>
            Classic period Saltillo sarape, c. 1720–1860{<br></br>} 
            Mexico{<br></br>}  
            Wool, cotton, and cochineal, indigo, and other natural dyes{<br></br>} 
            Gift of Katherine and Alexandrine McEwen{<br></br>}  
            E-1642
            </div>
          </div>
          
        </div>
      </Modal2>
      <Modal2 show3={show3} onClose={() => setShow3(false)}>
        <div className="content">
          <img
            src={Icon4}
            alt="Developer"
          />
          <div className="text">
            <h2>Transition Period Saltillo Sarapes</h2>
            <br></br>
            <div>
    Post-Classic period Saltillo sarape, c. 1870{<br></br>}
    Wool, cotton, and indigo and possibly synthetic dyes{<br></br>} 
    12504
            </div>
            <br></br>
            <div>
            Notice how, in this Transition period sarape, the designs have become increasingly 
            intricate and how the centralized diamond design has multiplied, as compared 
            to the sarapes made in the Classic period. 
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show4={show4} onClose={() => setShow4(false)}>
        <div className="content">
          <img
            src={Icon5}
            alt="Developer"
          />
          <div className="text">
          <h2>Transition Period Saltillo Sarapes</h2>
            <br></br>
            <div>
            Post-Classic period Saltillo sarape, c. 1880{<br></br>} 
            Wool, cotton, velvet, silver, and synthetic dyes{<br></br>} 
            On loan from Arizona History Museum, 86.60.19{<br></br>} 
            AT-2020-15-2
            </div>
            <br></br>
            <div>
            Notice the lavishly decorated neck-slit (bocamanga), 
            enabling this textile to be worn as a poncho.

            "TODO: Add PHOTO of sarape on hanger"
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show5={show5} onClose={() => setShow5(false)}>
        <div className="content">
          <img
            src={Icon6}
            alt="Developer"
          />
          <div className="text">
          <h2>Transition Period Saltillo Sarapes</h2>
           <br></br>
            <div>
            Textile printed with Saltillo sarape design{<br></br>} 
             C. 1870–1900{<br></br>} 
             Made in Germany or Austria{<br></br>} 
             Gift of Eman L. Beck estate{<br></br>} 
             E-4735
            </div>
            <br></br>
            <div>
            Demand for Saltillo sarapes spread throughout the world in the 1800s. European entrepreneurs, capitalizing 
            on the popularity and high monetary value of these pieces, printed Saltillo sarape designs on woven textiles. 
            Sold in Europe and Mexico, these less-expensive, 
            Saltillo-inspired textiles were popular with tourists and those who couldn’t afford a real Saltillo sarape
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
          <h2>Transition Period Saltillo Sarapes</h2>
          <br></br>
            <div>
            Textile printed with Saltillo sarape design{<br></br>} 
             C. 1870–1900{<br></br>} 
             Made in Germany or Austria{<br></br>} 
             Gift of Eman L. Beck estate{<br></br>} 
             E-4735
            </div>
            <br></br>
            <div>
            Demand for Saltillo sarapes spread throughout the world in the 1800s. 
            European entrepreneurs, capitalizing on the popularity and high monetary 
            value of these pieces, printed Saltillo sarape designs on woven textiles. 
            Sold in Europe and Mexico, these less-expensive, Saltillo-inspired textiles 
            were popular with tourists and those who couldn’t afford a real Saltillo sarape.
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show7={show7} onClose={() => setShow7(false)}>
        <div className="content">
          <img
            src={Icon8}
            alt="Developer"
          />
          <div className="text">
          <h2>The Regional Styles</h2>
            <br></br>
            <div>
            Oaxacan sarape, c. 1900–1920{<br></br>} 
            Wool, natural and synthetic dyes{<br></br>} 
            On loan from Tom Kieft{<br></br>} 
            AT-2020-13-2
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show8={show8} onClose={() => setShow8(false)}>
        <div className="content">
          <img
            src={Icon9}
            alt="Developer"
          />
          <div className="text">
          <h2>The Regional Styles</h2>
          <br></br>
            <div>
            Oaxacan sarape, c. 1920–1940{<br></br>} 
            Wool, natural and synthetic dyes{<br></br>}  
            On loan from Michael D. Higgins{<br></br>} 
            AT-2020-14-2
            </div>
            <br></br>
            <div>
            This sarape’s repeated diamond motifs may have been influenced 
            by the geometric designs on the walls of the ruins at Mitla in Oaxaca.
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show9={show9} onClose={() => setShow9(false)}>
        <div className="content">
          <img
            src={Icon10}
            alt="Developer"
          />
          <div className="text">
          <h2>The Regional Styles</h2>
          <br></br>
            <div>
            Tlaxcalan sarape, c. 1980{<br></br>} 
            Tlaxcala, Mexico{<br></br>} 
            Wool, natural and synthetic dyes{<br></br>} 
            1980-2-53
            </div>
            <br></br>
            <div>
            This weaving, from the 1980s, is a version of a Classic period Saltillo sarape 
            woven by a Tlaxcalan weaver. Tlaxcalans continue to weave sarapes using Classic 
            period design elements because they are still sought after by commercial buyers.
            </div>
          </div>
        </div>
      </Modal2>


    <HistoricalSection {...sixObj}/>
    <HistoricalSection {...sixObjOne}/>
    <HistoricalSection {...sixObjTwo}/>
    <HistoricalSection {...sixObjThree}/>
    </React.Fragment>
  );
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // };

    // return (
    //     <>
    //         <Sidebar isOpen={isOpen} toggle={toggle}/>
    //         <Navbar toggle={toggle} />
    //         {/* <FamilyMosaic /> */}
    //         <Modal2 />
    //     </>
    // )
}

export default FamilyPage;
