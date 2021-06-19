import styled from "styled-components";

export const FragmentContainer = styled.div`
    color: #fff;
//    background: ${({ lightBg }) => (lightBg) ? '#f9f9f9' : '#4a0033'};
	background: '#4a0033'
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const FragmentWrapper = styled.div`
    max-width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
height: 100%;
    grid-gap: 16px;
    padding: 0 50px;
	overflow-y:hidden;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 0px;
    padding: 0 15px;
    //grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 0px;
    padding: 0 15px;
  //grid-area: col2;
`;

export const ImgWrap = styled.div`
    //max-width: 555px;
    height: 80%;
`;

export const Img = styled.img`
    height: 90%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const FragmentH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 44px;
margin-left: 30px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const Description = styled.p`
    color: white;
`;