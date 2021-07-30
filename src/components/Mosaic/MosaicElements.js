import styled from 'styled-components';

export const HeadWrapper = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg) ? '#f9f9f9' : '#4a0033'};
    padding-top: 5rem;
    padding-bottom: 5rem;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Head = styled.div`
    display: grid;
    z-index: 1;

    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`;

export const Img1 = styled.img`
    max-width: 20%;
`;

export const Img2 = styled.img`
    max-width: 20%;
`;

export const Img3 = styled.img`
    max-width: 20%;
`;

export const Img4 = styled.img`
`;

export const Img5 = styled.img`
`;

export const Img6 = styled.img`
`;

export const Img7 = styled.img`
`;

export const Img8 = styled.img`
`;

export const Img9 = styled.img`
`;

export const Img10 = styled.img`
`;

export const Img11 = styled.img`
`;
