import React,  { useState, useCallback }  from 'react';
import { HeadWrapper,Head } from "./MosaicElements";
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
