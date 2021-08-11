
import React, { useState } from 'react';

import Modal2 from '../Modal2/modal2';
import Modal from '../Modal/index.js';

// import React, { useState } from "react";
import "./styles.css";
import HistoricalSection from '../HistoricalTextiles/historicalTextiles';

import { sixObj, sixObjOne, sixObjTwo, sixObjThree} from '../HistoricalTextiles/historicalData';

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

// import AnimeList from '../components/anime';
import "./styles.css";
// import Modal2 from '../components/Modal2/modal2';

import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements';


const Services = () => {
    const [showModal, setShowModal] = useState(false);


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
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <ServicesContainer id="services">
           
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} onClick={() => setShow1(true)}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon1} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow2(true)} src={Icon2}/>
                    {/* <ServicesH2>Virtual offices</ServicesH2> */}
                    {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon2} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow3(true)} src={Icon3}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2> */}
                    {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon3} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow4(true)} src={Icon4}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon4} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow5(true)} src={Icon5}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon5} />                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow6(true)} src={Icon6}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon6} />                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow7(true)} src={Icon7}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon7} />                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow8(true)} src={Icon8}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon8} />                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow9(true)} src={Icon9}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon9} />                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow10(true)} src={Icon10}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon10} />                    
                </ServicesCard>
                
            </ServicesWrapper>
            <br></br>
            <ServicesH1>Historical Textiles 1750-1980</ServicesH1>
            <Modal2 show1={show1} onClose={() => setShow1(false)}>
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
            <Modal2 show2={show2} onClose={() => setShow2(false)}>
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
            <Modal2 show3={show3} onClose={() => setShow3(false)}>
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
            <Modal2 show4={show4} onClose={() => setShow4(false)}>
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
            <Modal2 show5={show5} onClose={() => setShow5(false)}>
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
            <Modal2 show6={show6} onClose={() => setShow6(false)}>
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
            <Modal2 show7={show7} onClose={() => setShow7(false)}>
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
            <Modal2 show8={show8} onClose={() => setShow8(false)}>
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
            <Modal2 show9={show9} onClose={() => setShow9(false)}>
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
            <Modal2 show10={show10} onClose={() => setShow10(false)}>
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
        </ServicesContainer>
    )
}

export default Services;
