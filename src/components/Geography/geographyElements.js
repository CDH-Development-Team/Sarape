import styled from "styled-components";

export const GeographyContainer = styled.div`

    display: flex;
    color:white;
    height:100%;
    flex-direction: column;
    justify-content: center;
    background: #4a0033;
Padding: 0px;
padding-top: 80px;

    @media screen and (max-width: 768px){

    }

    @media screen and (max-width: 480px){

    }
`;

export const MosaicWrapper = styled.div`
width: 100%;
`;

export const MosaicImg = styled.div`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    max-width: ${({ width }) => width};
    
`;

export const HeaderText=styled.div`
margin: 50px;
@media screen and (min-width: 768px){

column-count:3;
}
`;

 export const GeographyEntry = styled.div`
height: 100%;
margin-top:100px;
padding: 10px;
`;

export const GeographyEntryImg = styled.div`
width: ${({wide}) => (wide) ? '100%' : '60%'};
float:right;

@media screen and (max-width: 480px){
width:100%;
}
`;

export const GeographyEntryText = styled.div`
float: ${({wide}) => (wide) ? 'left' : 'right'};
width: ${({wide}) => (wide) ? '45%' : '30%'};
margin: ${({wide}) => (wide) ? "20px 50px 20px 20px" : "10% 20px 10% 20px"} ;
`;

export const GeographyEntryDescription=styled.div`
margin: 50px 10px;
width: ${({wide}) => (wide) ? '40%' : '90%'};
float:right;
text-align: right;  
`;

export const GeographyStatues = styled.div`

    padding: 30px;  
    @media screen and (max-width: 1000px){
    }

    @media screen and (max-width: 768px){
    }
`;

export const Statue = styled.div`
    border-radius: 10px;
    margin: 40px;
    padding: 0px;
    float:left;
    width:25%;
`;

export const StatueImg = styled.div`

`;

export const BackgroundDiv = styled.div`
position: relative;
height: 90vw;
`;

export const BackgroundContentLeft=styled.div`
position: absolute;
bottom:10%;
width: 30%;
left:5%;
`;
export const BackgroundContentRight=styled.div`
position: absolute;
bottom:20%;
right:5%;
Width: 30%;
`;

export const BackgroundImg=styled.div`
position:absolute;
top:0;
left:0;
`;