import React, {useState} from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import img2 from "../../textiles_png/7_textiles/7A1_1978-1-2.png";
import img3 from "../../textiles_png/7_textiles/7A2_1980-29-1.png";
import img4 from "../../textiles_png/7_textiles/7B1_1976-11-1.png";
import img5 from "../../textiles_png/7_textiles/7B2_E-6102.png";
import img6 from "../../textiles_png/7_textiles/7C1_E-2724.png";
import img7 from "../../textiles_png/7_textiles/7C2_E-8988.png";
import img8 from "../../textiles_png/7_textiles/7C3_E-83.png";
import img9 from "../../textiles_png/7_textiles/7C4_at_2020-337-1.png";

import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements';
import Modal from '../Modal';

const Section7 = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <ServicesContainer id="section7">
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={img2}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img2} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={img3}/>
                    {/* <ServicesH2>Virtual offices</ServicesH2> */}
                    {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img3} />
                    <ServicesIcon onClick={openModal} src={img4}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2> */}
                    {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img4} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={img5}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2> */}
                    {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img5} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={img6}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img6} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={img7}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img7} />  
                    <ServicesIcon onClick={openModal} src={img8}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img8} />                   
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={img9}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {img9} />                    
                </ServicesCard>
            </ServicesWrapper>
            <br></br>
            <br></br>
            <ServicesH1>Satillo Influences</ServicesH1>
        </ServicesContainer>
        
    )
}

export default Section7;
