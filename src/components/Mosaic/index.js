import React,  { useState, useCallback }  from 'react';
import { HeadWrapper,Head,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11 } from "./MosaicElements";
import Gallery from "react-photo-gallery";


import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from "./photos.js";
   
const Mosaic = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <HeadWrapper>
        <Head>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                }))}
                />
                <div>Hello</div>
            </Modal>
            ) : null}
        </ModalGateway>
        </Head>
    </HeadWrapper>
  );
}

export default Mosaic;
