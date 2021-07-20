import styled from "styled-components";
export const GeographyContainer = styled.div`

    display: flex;
    color:white;
    flex-direction: column;
    justify-content: center;
    background: #4a0033;
    Padding: 0px;


    @media screen and (max-width: 768px){

    }

    @media screen and (max-width: 480px){

    }
`;



export const HeaderText=styled.div`
margin: 50px;
@media screen and (min-width: 768px){

column-count:3;
}
`;

 export const GeographyEntry = styled.div`  
maxHeight:100%;
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

export const MosaicModal = styled.div`
position:absolute;
top:0;
left:0;
background: #000;
display:none;
`;

export const GeographyMosaicParent = styled.div` 
    display: grid; 
    grid-template-columns: repeat(18, 1fr); 
    grid-template-rows: repeat(8, 1fr); 
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
    height: ${({height}) => (height)+"px"};
    width: ${({width}) => (width)+"px"};

    `;
    export const GeographyMosaic1 = styled.div` grid-area: 1 / 1 / 4 / 3;`; 
    export const GeographyMosaic2 = styled.div` grid-area: 1 / 3 / 4 / 7; `;
    export const GeographyMosaic3 = styled.div` grid-area: 1 / 7 / 3 / 12;`; 
    export const GeographyMosaic4 = styled.div` grid-area: 1 / 12 / 3 / 16;`;
    export const GeographyMosaic5 = styled.div` grid-area: 1 / 16 / 3 / 19;`;
    export const GeographyMosaic6 = styled.div` grid-area: 4 / 1 / 6 / 4; `;
    export const GeographyMosaic7 = styled.div`grid-area: 6 / 1 / 9 / 4; `;
    export const GeographyMosaic8 = styled.div` grid-area: 4 / 4 / 6 / 7;`;
    export const GeographyMosaic9 = styled.div` grid-area: 6 / 4 / 9 / 7;`;
    export const GeographyMosaic10 = styled.div `grid-area: 3 / 7 / 6 / 12;`;
    export const GeographyMosaic11 = styled.div `grid-area: 6 / 7 / 8 / 10;`;
    export const GeographyMosaic12 = styled.div`grid-area: 6 / 10 / 9 / 12;`; 
    export const GeographyMosaic13 = styled.div`grid-area: 8 / 7 / 9 / 10; `;
    export const GeographyMosaic14 = styled.div`grid-area: 3 / 12 / 6 / 16; `;
    export const GeographyMosaic15 = styled.div`grid-area: 6 / 12 / 9 / 16; `;
    export const GeographyMosaic16 = styled.div `grid-area: 3 / 16 / 7 / 19;`;
    export const GeographyMosaic17 = styled.div `grid-area: 7 / 16 / 9 / 19;`;