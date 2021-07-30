import React, {useState} from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import Icon4 from '../../textiles_png/3_textiles/AT-2020-16-2.png';
import Icon5 from '../../textiles_png/3_textiles/AT-2020-16-3.png';
import Icon6 from '../../textiles_png/3_textiles/AT-2020-16-4.png';
import Icon7 from '../../textiles_png/3_textiles/AT-2020-16-5.png';
import Icon8 from '../../textiles_png/3_textiles/AT-2020-16-6.png';
import Icon9 from '../../textiles_png/3_textiles/AT-2020-16-7.png';
import { homeObjOne, homeObjTwo, homeObjThree, SarapeObj1, SarapeObj2, SarapeObj3, SarapeObj4, SarapeObj5, SarapeObj6, SarapeObj7 } from '../InfoSection/Data';
// import AnimeList from '../components/anime';


import {fragmentOne, fragmentTwo, fragmentThree, fragmentFour, fragmentFive, fragmentSix} from './Fragment/FragmentsData.js';

import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP,
	FragmentQuote,
	FragmentDiv,
	FragmentCite } from './ServicesElements';
	
import Fragment from './Fragment/index.js';
import Modal from '../Modal';
// import Modal from 'react-modal';
import AnimeList from '../anime';
import InfoSection from '../InfoSection';

const customStyles = {
    content : {
      height                : 'auto',
      width                 : '100%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#4a0033', 
      zindex                : '1000',
      borderRadius         :"10px"
    }
};

const Services = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    return (

        <ServicesContainer id="services">
            <ServicesH1>FRAGMENT SERIES BY PORFIRIO GUTIERREZ</ServicesH1>
                <ServicesP>
                My ongoing Fragment series is my interpretation of one of the most remarkable weaving traditions created by the blending of Native American and European traditions. These pieces reflect how the merger created new forms of expression in the art of weaving. This style of weaving became part of our Mexican cultural identity and remains part of my personal expression. My Fragment series pays homage to our ancestral weavers, who, in many cases, were slaves yet they contributed their unique design sensibilities and left an artistic legacy we can still appreciate and respect today.
                <br /><br />For more information go to porfiriogutiérrez.com
                </ServicesP>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon onClick={openModal} src={Icon4}/>
                        {/* <ServicesIcon onClick={setModalIsOpenToTrue} src={Icon4}/> */}
                        {/* <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
                        {/* <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon4} /> */}
                        <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon4} /> 
                        {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}> */}
                        {/* <button onClick={setModalIsOpenToFalse}>x</button> */}
                        {/* <InfoSection {...SarapeObj1}/> */}
                        {/* <AnimeList imgSrc={Icon4}/> */}
                        {/* </Modal> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon onClick={openModal} src={Icon5}/>
                        {/* <ServicesH2>Virtual offices</ServicesH2> */}
                        {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
                        <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon5} /> 
                        {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                        <button onClick={setModalIsOpenToFalse}>x</button>
                        <InfoSection {...SarapeObj2}/> */}
                        {/* <AnimeList imgSrc={Icon5}/> */}
                        {/* </Modal> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon onClick={openModal} src={Icon6}/>
                        {/* <ServicesH2>Premium Benefits</ServicesH2> */}
                        {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                        <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon6} />                         
                        {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                            <button onClick={setModalIsOpenToFalse}>x</button>
                            <InfoSection {...SarapeObj3}/> */}
                            {/* <AnimeList imgSrc={Icon6}/> */}
                        {/* </Modal> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon onClick={openModal} src={Icon7}/>
                        {/* <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                        <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon7} />                         
                        {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                            <button onClick={setModalIsOpenToFalse}>x</button>
                            <InfoSection {...SarapeObj4}/> */}
                            {/* <AnimeList imgSrc={Icon7}/> */}
                        {/* </Modal> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon onClick={openModal} src={Icon8}/>
                        {/* <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                        <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon8} /> 
                        {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                            <button onClick={setModalIsOpenToFalse}>x</button>
                            <InfoSection {...SarapeObj5}/> */}
                            {/* <AnimeList imgSrc={Icon8}/> */}
                        {/* </Modal> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon onClick={openModal} src={Icon9}/>
                        {/* <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                        <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon9} /> 
                        {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}> */}
                            {/* <button onClick={setModalIsOpenToFalse}>x</button> */}
                            {/* <InfoSection {...SarapeObj6}/> */}
                            {/* <AnimeList imgSrc={Icon9}/> */}
                        {/* </Modal> */}
                    </ServicesCard>
                </ServicesWrapper>
                <FragmentQuote>
                    <FragmentDiv>
                        "This art form is a deep part of my culture and is my life. It is like my native language or our ceremonies. The cochineal produces a color just like the color of our blood; the weft and the warp are like the tissue in our body. Textiles are our second skin as well as a means of expression.""
                        <br/><br/>
                        <FragmentCite>
                            Porfirio Gutiérrez
                        </FragmentCite>
                    </FragmentDiv>
                </FragmentQuote>
            </ServicesContainer>
    )
}

export default Services;
