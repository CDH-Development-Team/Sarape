import styled from "styled-components";

export const ServicesContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #4a0033;
    // Padding: 10px;
    padding-top: 80px;
    align-items: center;
    
    @media screen and (max-width: 768px){

    }

    @media screen and (max-width: 480px){

    }
`;

export const ServicesWrapper = styled.div`
    max-width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
	overflow-y: hidden;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    // background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 0px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;   
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 260px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 44px;
    margin-left: 30px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;

`;

export const ServicesP = styled.p`
    font-size: 1rem;
	color: white;
	margin-bottom: 80px;
	width:40%;
    font-family: myriad-pro,sans-serif;
    font-weight: 10;
	margin-left: 30px;
`;

export const FragmentQuote = styled.div`
	color: white;
	display: flex;
	justify-content:center;
	width: 100%;
    font-family: myriad-pro-condensed,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1rem;
`;

export const FragmentDiv = styled.div`
	width: 70%;
	margin: 20px;
    font-family: Lucida Handwriting;
`;

export const FragmentCite = styled.div`
    float: right;
    font-family: Lucida Handwriting;
    font-style: italic;
`;

export const FragmentSeries = styled.div`


`;
