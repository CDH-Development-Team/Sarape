
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import History from '../components/History';
import FamilyMosaic from '../components/FamilyMosaic';
import Modal2 from '../components/Modal2/modal2';
// import React, { useState } from "react";
import "./styles.css";
import Button from '../components/button/Button';

import Icon1 from "../images/5B4_Bobbins by Craig Holmes.jpg";
import Icon2 from "../images/PGOAX82718-0242.jpg";
import Icon3 from "../images/5A2_Porfirio_Gutierrez_by_recker.jpg";
import Icon4 from "../images/Teotitlan shoot-by nikhol esteras.jpg";
import Icon5 from "../images/5A1_Parents by Javier Lazo.jpg";
import Icon6 from "../images/5B2_08-09-18 The Big Boys a.jpg";
import Icon7 from "../images/By Alana Coghlan.jpg";
import Icon8 from "../images/5A3_Familia.jpg";


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
  return (
    <React.Fragment>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        {/* <Button onClick={() => setShow(true)}>Open Modal</Button> */}
        <img
            src={Icon1}
            alt="Developer"
            onClick={() => setShow(true)}
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
      </div>
      <Modal2 show={show} onClose={() => setShow(false)}>
        <div className="content">
          <img
            src={Icon1}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <br/>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
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
            {/* <h2>John Doe</h2> */}
            <div>
              Whatever
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
      <Modal2 show2={show2} onClose={() => setShow2(false)}>
        <div className="content">
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
          <img
            src={Icon3}
            alt="Developer"
          />
        </div>
      </Modal2>
      <Modal2 show3={show3} onClose={() => setShow3(false)}>
        <div className="content">
          <img
            src={Icon4}
            alt="Developer"
          />
          <div className="text">
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
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
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
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
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
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
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
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
            {/* <h2>John Doe</h2> */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </div>
          </div>
        </div>
      </Modal2>
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
