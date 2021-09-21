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
padding: 10px;
margin: 4% 0;
`;

export const GeographyEntryImg = styled.div`
//height: ${({height}) => (height*0.7)+"px"};
max-width: ${({wide}) => (wide) ? '90%' : '40%'};
float:right;
margin-right: 10%;
//overflow:hidden;
@media screen and (max-width: 480px){
width:100%;
}
`;

export const GeographyEntryText = styled.div`
float: ${({wide}) => (wide) ? 'left' : 'right'};
width: ${({wide}) => (wide) ? '35%' : '40%'};
margin: ${({wide}) => (wide) ? "20px 50px 20px 0px" : "7vh 20px 0 0px"} ;
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
//max-height:100%;
padding: 10px;
margin: auto 0;
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
Width: 20%;
`;

export const BackgroundImg=styled.div`
height: ${({height}) => (height*0.8)+"px"};
overflow:hidden;
max-width: 90%;
float:right;
@media screen and (max-width: 480px){
width:100%;
}
`;

export const MosaicModal = styled.div`
position:absolute;
top:0;
left:0;
background: #4a0033;
display:none;
`;

export const GeographyMosaicParent = styled.div` 
    display: grid; 
    grid-template-columns: repeat(18, 1fr); 
    grid-template-rows: repeat(8, 1fr); 
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
    margin: 20px;
    height: ${({height}) => (height)+"px"};
    width: ${({width}) => (width-40)+"px"};
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



    export const HistoryMosaicParent = styled.div` 
        display: grid; 
        grid-template-columns: repeat(38, 1fr); 
        grid-template-rows: repeat(24, 1fr); 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        margin: 0 auto;
        height: ${({height}) => (height)+"px"};
    width: ${({width}) => (width)+"px"}; 
        `;

        export const HistoryMosaicParent2 = styled.div` 
        display: grid; 
        grid-template-columns: repeat(38, 1fr); 
        grid-template-rows: repeat(24, 1fr); 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        margin: 0 auto;
        height: ${({height}) => (height)+"px"};
    width: ${({width}) => (width)+"px"}; 
        `;

        export const HistoryMosaic1 = styled.div `grid-area: 1 / 1 / 9 / 12; `; 
        export const HistoryMosaic2 = styled.div `grid-area: 1 / 10 / 6 / 20;`;
        export const HistoryMosaic3 = styled.div `grid-area: 1 / 20 / 6 / 27;`;
        export const HistoryMosaic4 = styled.div `grid-area: 1 / 27 / 6 / 39;`;
        export const HistoryMosaic5 = styled.div `grid-area: 9 / 1 / 20 / 10;`; 
        export const HistoryMosaic6 = styled.div `grid-area: 20 / 3 / 25 / 10;`;
        export const HistoryMosaic7 = styled.div `grid-area: 20 / 1 / 25 / 3;`;
        export const HistoryMosaic8 = styled.div `grid-area: 6 / 10 / 20 / 20;`;
        export const HistoryMosaic9 = styled.div `grid-area: 20 / 10 / 25 / 20;`;
        export const HistoryMosaic10 = styled.div `grid-area: 6 / 20 / 10 / 27;`;
        export const HistoryMosaic11 = styled.div `grid-area: 10 / 20 / 15 / 27;`;
        export const HistoryMosaic12 = styled.div `grid-area: 15 / 20 / 25 / 27;`;
        export const HistoryMosaic13 = styled.div `grid-area: 6 / 27 / 14 / 39; `;
        export const HistoryMosaic14 = styled.div `grid-area: 14 / 27 / 25 / 39;`; 
        export const HistoryMosaic15 = styled.div `grid-area: 18 / 1 / 25 / 10;`;
        export const HistoryMosaic16 = styled.div `grid-area: 9 / 10 / 18 / 20;`;
        export const HistoryMosaic17 = styled.div `grid-area: 1 / 28 / 9 / 20;`;
        export const HistoryMosaic18 = styled.div `grid-area: 1 / 34 / 8 / 38;`;
        export const HistoryMosaic19 = styled.div `grid-area: 18 / 20 / 25 / 28;`;
        export const HistoryMosaic20 = styled.div `grid-area: 18 / 34 / 25 / 40;`;
        export const HistoryMosaic21 = styled.div `grid-area: 12 / 28 / 18 / 34;`;