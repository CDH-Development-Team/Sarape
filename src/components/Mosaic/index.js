import React from 'react';
import { HeadWrapper,Head,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11 } from "./MosaicElements";
import Gallery from "react-photo-gallery";
import img from "../../images/5A3_Familia.jpg";
import img2 from "../../images/5B4_Bobbins by Craig Holmes.jpg";
import img3 from "../../images/5B2_08-09-18 The Big Boys a.jpg";
import {photos} from "./photos.js";
   
const Mosaic = () => {
    return (
        <>
        <HeadWrapper>
            <Head>              
                <Gallery photos={photos} />
            </Head>
        </HeadWrapper>

            {/* <HeadWrapper>
                <Head>
                    <Img1 src={img}></Img1>  
                    <Img2 src={img2}></Img2>
                    <Img3 src={img3}></Img3>
                    <Img4></Img4>  
                    <Img5></Img5>
                    <Img6></Img6>
                    <Img7></Img7>  
                    <Img8></Img8>
                    <Img9></Img9>
                    <Img10></Img10>  
                    <Img11></Img11>
                </Head>  
            </HeadWrapper> */}
        </>
    )
}

export default Mosaic;
