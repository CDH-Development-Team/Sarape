import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg) ? '#f9f9f9' : '#4a0033'};
    padding-top: 100px;
    @media screen and (max-width: 768px) {
        // padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;

    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-column: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => 
            imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 0px;
    padding: 0 15px;
    grid-area: col1;
    height:100%;
`;

export const Column2 = styled.div`
    margin-bottom: 0px;
    padding: 0 15px;
    grid-area: col2;
    height:100%;
    overflow: hidden;
`;

export const TextWrapper = styled.div`
    max-width: 500px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    margin-top: 24px;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const Subtitle = styled.p`
    max-width: 550px;
    margin-bottom: 5%;
    // padding: 4%;
    font-size: 1rem;
    line-height: 24px;
    font-family: myriad-pro,sans-serif;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const Caption = styled.p`
    max-width: 440px;
    margin-bottom: 5%;
    margin-left: 0%;
    padding-right: 4%;
    padding-left: 4%;
    font-size: 18px;
    line-height: 24px;
    font-family: myriad-pro,sans-serif;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const ImgWrap2 = styled.div`
    max-width: 555px;
    height: 100%;
    align-items: right;
`;

/*export const Img = styled.img`
    max-width:100%;
    height:auto;
    transform: scale(0.75, 0.75);
    margin: 0 0 10px 0;
    padding-right: 0;
    // padding-top: 4%;
`;*/

export const Img = styled.img`
    width: 60%;
    margin: 0 0 50px 0;
    padding-right: 0;

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const Img2 = styled.img`
    max-width:100%;
    height:auto;
    margin: 0 0 10px 0;
    padding-right: 0;
    padding-top: 4%;
`;
