import React, {useState} from 'react';
import Modal from 'react-modal';
import AnimeList from '../components/anime';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#F0AA89'      
    }
};
const ModalInFunctionalComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <AnimeList/>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;