import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#4a0033")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  overflow: hidden;
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
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 0px;
  padding: 0 15px;
  grid-area: col1;
  background-color: ${({ block }) => (block ? "#AD0042" : "#4a0033")};
`;

export const Column2 = styled.div`
  margin-bottom: 0px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-family: myraid-pro;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin-top: ${({ margImg }) => (margImg ? "10px" : "190px")};
`;

export const Img = styled.img`
  width: ${({ smallImg }) => (smallImg ? "50%" : "80%")};
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Quote = styled.p`
  color: white;
  // display: flex;
  // justify-content:center;
  width: 100%;
  font-family: Lucida;
  font-weight: 500;
  font-style: normal;
  font-size: 1.3rem;
`;

export const QuoteDiv = styled.div`
  position: relative;
  color: white;
  paddingbottom: 8rem;
  // display: flex;
  // justify-content:center;
  width: 90%;
  font-family: Lucida;
  font-weight: 100;
  font-style: normal;
`;

export const QuoteAuthor = styled.p`
  position: relative;
  margin-left: 14rem;
  color: white;
  font-family: Lucida;
  font-weight: 500;
  font-style: normal;
  font-size: 1.2rem;
  text-align: align-right;
`;
