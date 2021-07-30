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

import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements';
import Modal from '../Modal/index.js';

const Services = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <ServicesContainer id="services">
            <ServicesH1>FRAGMENT SERIES BY PORFIRIO GUTIERREZ</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={Icon4}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon4} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={Icon5}/>
                    {/* <ServicesH2>Virtual offices</ServicesH2> */}
                    {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon5} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={Icon6}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2> */}
                    {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon6} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={Icon7}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon7} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={Icon8}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon8} />                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon onClick={openModal} src={Icon9}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                    <Modal showModal={showModal} setShowModal={setShowModal} ImgSrc = {Icon9} />                    
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
