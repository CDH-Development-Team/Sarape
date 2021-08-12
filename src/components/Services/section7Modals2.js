
import React, { useState } from 'react';

import Modal2 from '../Modal2/modal2';
import Modal from '../Modal/index.js';

// import React, { useState } from "react";
import "./styles.css";
import Button from '../button/Button';
import Section7 from '../Section7/section7index';

import { sevenObj, sevenObjOne, sevenObjTwo, sevenObjThree, sevenObjFour, sevenObjFive, sevenObjSix, sevenObjSeven} from '../Section7/section7-data';

import Icon1 from "../../textiles_png/7_textiles/7A1_1978-1-2.png";
import Icon2 from "../../textiles_png/7_textiles/7A2_1980-29-1.png";
import Icon3 from "../../textiles_png/7_textiles/7B1_1976-11-1.png";
import Icon4 from "../../textiles_png/7_textiles/7B2_E-6102.png";
import Icon5 from "../../textiles_png/7_textiles/7C1_E-2724.png";
import Icon6 from "../../textiles_png/7_textiles/7C2_E-8988.png";
import Icon7 from "../../textiles_png/7_textiles/7C3_E-83.png";
import Icon8 from "../../textiles_png/7_textiles/7C4_at_2020-337-1.png";

// import AnimeList from '../components/anime';
import "./styles.css";
// import Modal2 from '../components/Modal2/modal2';

import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper7, 
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
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <ServicesContainer id="services">
           
            <ServicesWrapper7>
                <ServicesCard>
                    <ServicesIcon src={Icon1} onClick={() => setShow1(true)}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon1} />
                </ServicesCard>
                <div>
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
                </div>
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
                <div>
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
                </div>
                <ServicesCard>
                    <ServicesIcon onClick={() => setShow8(true)} src={Icon8}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon8} />                    
                </ServicesCard>
                
            </ServicesWrapper7>
            <br></br>
            <ServicesH1>Saltillo Influences</ServicesH1>
            <Modal2 show1={show1} onClose={() => setShow1(false)}>
            <div className="content">
            <img
                src={Icon1}
                alt="Developer"
            />
             <div className="text">
          <h2>The RARÁMURI (Tarahumara)</h2>
          <br></br>
          <div>
            Post-Classic period Saltillo sarape, c. 1870 {<br></br>}
            Wool, cotton, and indigo and possibly synthetic dyes{<br></br>}
            12504
            </div>
            <br></br>
            <div>
            Although the diamond may have been a traditional Rarámuri motif, 
            the design layout shows a definite Saltillo sarape influence.
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
            <h2>Mayo</h2>
            <br></br>
            <div>
            Mayo sarape, c. 1920 {<br></br>}
            Wool and indigo dye {<br></br>}
            Gift of the University of Arizona Foundation {<br></br>}
            1980-29-1
            </div>
            <br></br>
            <div>
            This early-1900s Mayo sarape has an unusually large central diamond 
            superimposed on a typical Saltillo sarape design layout. 
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
            <h2>Saltillo influence in new mexico</h2>
            <br></br>
            <div>
            Rio Grande blanket, c. 1890 {<br></br>}
            New MexicoWool, cotton, and synthetic dyes{<br></br>}
            Gift of Mr. and Mrs. William Serat, 1976{<br></br>}
            1976-11-1
            </div>
            <br></br>
            <div>
            Large, bold elements were common in Rio Grande blanket designs. During the last quarter of the 1800s, in both New Mexico and Mexico, 
            backgrounds of Saltillo sarape designs became increasingly complex.
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
            <h2>Saltillo influence in new mexico</h2>
            <br></br>
            <div>
            Chimayo blanket, c. 1920–1950 {<br></br>} 
            Wool, cotton, and synthetic dyes {<br></br>} 
            Gift of Mrs. Robert Schuman Steinert, 1964{<br></br>} 
            E-6102
            </div>
            <br></br>
            <div>
            This Chimayo blanket’s design shows a strong Mexican Saltillo 
            influence yet has a distinctive New Mexico flair.
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
            <h2>Saltillo influence in navajo weaving</h2> 
            <br></br>
            <div>
            Navajo sarape with Saltillo influence, c. 1850 {<br></br>} 
            Wool, cotton, and cochineal and indigo dyes{<br></br>}  
            Collected by Lieutenant John Sanford Mason, c. 1870 {<br></br>} 
            Purchase from Major Ennalls Waggaman, 1954{<br></br>} 
            E-2724
            </div>
            <br></br>
            <div>
            This textile was woven by a master artist who may have been inspired by a Saltillo sarape, as it has multiple diamond motifs. 
            The weave is extremely tight, a characteristic of Classic period sarapes, 
            and is dyed with cochineal and indigo. Military men were among the first Americans to purchase Navajo sarapes. 
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
           <h2>Saltillo influence in navajo weaving</h2>
           <br></br>
            <div>
            Navajo blanket, c. 1890{<br></br>} 
            Wool, cotton, and synthetic dyes{<br></br>} 
            Gift of the Estate of Julia Howell Overshiner, 1970{<br></br>} 
            E-8988
            </div>
            <br></br>
            <div>
            This Navajo blanket is woven with commercial pre-dyed
            Germantown yarns that were supplied to Navajo weavers by traders.
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
            <h2>Saltillo influence in navajo weaving</h2>
            <br></br>
            <div>
            Navajo Third Phase Chief ’s blanket, c. 1927{<br></br>} 
            Wool, cotton, and synthetic dyes{<br></br>} 
            Lukachukai Mountains, AZ{<br></br>} 
            Collected by E. J. Hands, 1927{<br></br>} 
            E-83
            </div>
            <br></br>
            <div>
            This is a Third Phase Chief ’s blanket, a style dating to the 1860s. 
            While earlier versions were made to be worn, 
            later ones were created for the tourist market and were more likely used 
            as rugs or hung on walls as artwork. The diamond motif is abundant and 
            centralized like a sarape.
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
          <h2>Saltillo influence in navajo weaving</h2>
          <br></br>
            <div>
            Poncho sarape, 2015{<br></br>} 
            Kathy Marianito{<br></br>} 
            Churro wool, cotton, cochineal and indigo dyes{<br></br>} 
            Purchased by ASM Friends of Collections{<br></br>} 
            2020-337-1
            </div>
            <br></br>
            <div>
              ADD 3D Photo
            </div>
          </div>
        </div>
            </Modal2>
            <Section7 {...sevenObj}/>
            <Section7 {...sevenObjOne}/>
            <Section7 {...sevenObjTwo}/>
            <Section7 {...sevenObjThree}/>
            <Section7 {...sevenObjFour}/>
            <Section7 {...sevenObjFive}/>
            <Section7 {...sevenObjSix}/>
            <Section7 {...sevenObjSeven}/>
        </ServicesContainer>
    )
}

export default Services;
