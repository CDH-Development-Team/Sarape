import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#4a0033")};
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  z-index: 1;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
`;

export const Column1 = styled.div`
`;

export const Column2 = styled.div`
  float: left;
  width: 60%;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 1rem;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  margin-bottom: -35px;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const Subtitle1 = styled.p`
  max-width: 440px;
  font-size: 1.5rem;
  line-height: 24px;
  padding: 40px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  color: fff;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
`;