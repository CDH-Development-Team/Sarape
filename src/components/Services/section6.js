import React, { useState } from "react";

import img2 from "../../textiles_png/6_textiles/6A1_at_2020-15-1.png";
import img3 from "../../textiles_png/6_textiles/6A2_at_2020-13-1.png";
import img4 from "../../textiles_png/6_textiles/6A3_E-1642.png";
import img5 from "../../textiles_png/6_textiles/6B1_19766_HIRES.png";
import img6 from "../../textiles_png/6_textiles/6B2_12504.png";
import img7 from "../../textiles_png/6_textiles/6B4_at_2020-15-2.png";
import img8 from "../../textiles_png/6_textiles/6B5_E-4735.png";
import img9 from "../../textiles_png/6_textiles/6C1_at_2020-13-2.png";
import img10 from "../../textiles_png/6_textiles/6C2_at_2020-14-2.png";
import img11 from "../../textiles_png/6_textiles/6C3_1980-2-53.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";
import Modal from "../Modal/index.js";

const Section6 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <ServicesContainer id="section6">
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img2} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img2}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img3} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img3}
          />
          <ServicesIcon onClick={openModal} src={img4} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img4}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img5} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img5}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img6} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img6}
          />
          <ServicesIcon onClick={openModal} src={img7} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img7}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img8} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img8}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img9} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img9}
          />
          <ServicesIcon onClick={openModal} src={img10} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img10}
          />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon onClick={openModal} src={img11} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImgSrc={img11}
          />
        </ServicesCard>
      </ServicesWrapper>
      <br></br>
      <br></br>
      <ServicesH1>HISTORICAL TEXTILES 1750-1980</ServicesH1>
    </ServicesContainer>
  );
};

export default Section6;
