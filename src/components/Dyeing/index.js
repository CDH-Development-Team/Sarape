import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { GeographyContainer, GeographyMosaicParent, GeographyMosaic1, GeographyMosaic2, GeographyMosaic3, GeographyMosaic4, GeographyMosaic5, GeographyMosaic6, GeographyMosaic7, GeographyMosaic8, GeographyMosaic9, GeographyMosaic10, GeographyMosaic11, GeographyMosaic12, GeographyMosaic13, GeographyMosaic14, GeographyMosaic15, GeographyMosaic16, GeographyMosaic17, MosaicWrapper, MosaicImg, HeaderText, GeographyEntry, GeographyEntryText, GeographyEntryImg, GeographyEntryDescription, GeographyStatues, Statue, StatueImg, BackgroundDiv, BackgroundContentLeft, BackgroundContentRight, BackgroundImg, HistoryMosaicParent, HistoryMosaic1, HistoryMosaic2, HistoryMosaic3, HistoryMosaic4, HistoryMosaic5, HistoryMosaic6, HistoryMosaic7, HistoryMosaic8, HistoryMosaic9, HistoryMosaic10, HistoryMosaic11, HistoryMosaic12, HistoryMosaic13, HistoryMosaic14} from '../Geography/geographyElements.js';
import headerImg from '../../images/section 2/history/header.jpg'
import Icon1 from '../../images/dyeing2.png'
import Icon2 from "../../images/dyeing2.png"
import Icon3 from "../../images/dyeing3.png"
import Icon4 from "../../images/dyeing4.png"
import Icon5 from "../../images/dyeing5.png"
import Icon6 from "../../images/dyeing6.png"
import Icon7 from "../../images/dyeing7.png"
import Icon8 from "../../images/dyeing8.png"
import Icon9 from "../../images/dyeing9.png"
import Icon10 from "../../images/dyeing10.png"
import Icon11 from "../../images/dyeing11.png"
import close from '../../images/close.png';
import Color1 from '../../images/section 2/color1.png'
import "../Geography/geography.css";
import useWindowDimensions from '../Geography/dimensions';

const customStyles = {
    content: {
      position:"absolute",
      top:0,
      left:0,
      width: "100%",    
      height: "100%",
      background: "#000",
      color: "#fff"
    },
  };
const Dyeing = () =>{
    const {height, width} = useWindowDimensions();
    let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
    
        
        function openModal() {
            setIsOpen(true);
          }
          function afterOpenModal() {
            // references are now sync'd and can be accessed.
            
          }
        
          function closeModal() {
            setIsOpen(false);
          }

    const [content, setContent] = React.useState(null);
    return(
<>
 <GeographyContainer>
 <GeographyMosaicParent  height={(width-(width%18))/18*8} width={(width-(width%18))}>
<Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <img src={close} onClick={closeModal} style={{width:"5%"}}/>

                
            {content}

        
            </Modal>
    <GeographyMosaic1 className={"mosaic"}>
        <img src={Color1} height={"100%"} width={"100%"}></img>
    </GeographyMosaic1>
    <GeographyMosaic2 className={"mosaic"}> 
        <img src={Icon2} height={"100%"} width={"100%"} onClick={
            () =>{
                setContent(
                    <GeographyEntry>
<GeographyEntryImg><img src={Icon2} width={"100%"}></img><GeographyEntryDescription>
Entrance into Guadalajara<br/>Homenaje á Cristóbal Colón: Antigüedades Méxicanas, Lienza 53.<br/> Fray Angelico Chavez History Library/New Mexico History Museum, 972MexH
</GeographyEntryDescription>
</GeographyEntryImg>
<GeographyEntryText>
Tlaxcalan forces accompanied the Spaniards on post-conquest explorations of northern Mexico. This scene is from the 1522 exploration led by Cristóbal de Olid, one of Cortés’s lieutenants.
</GeographyEntryText>
</GeographyEntry>
                );
                openModal();}
                }></img>
        
    </GeographyMosaic2>

    <GeographyMosaic3 className={"mosaic"}>
    <img src={Color1} width ={"100%"} height={"100%"}></img>
    </GeographyMosaic3>


    <GeographyMosaic4 className={"mosaic"}>
    <img src={Icon6} height={"100%"} width={"100%"} onClick={
        () =>{
            setContent(
                <GeographyEntry>
<GeographyEntryImg><img src={Icon6} width={"100%"}></img><GeographyEntryDescription>
Mitla, Oaxaca, Mexico<br/> Joel Carillet, photographer, 2018
</GeographyEntryDescription>
</GeographyEntryImg>
<GeographyEntryText>
Mitla, another capital of the early Zapotec civilization, is known for the geometric designs covering many of its buildings. These details inspired traditional Zapotec weaving designs. Built about 1,600 years ago, Mitla was an important Zapotec and Mixtec religious center until its destruction by the Spaniards in 1553. 
</GeographyEntryText>
</GeographyEntry>   
            );
            openModal();
        }
    }></img> 
    </GeographyMosaic4>


    <GeographyMosaic5 className={"mosaic"}>
        <img src={Icon7} height={"100%"} width={"100%"} onClick={
            () =>{
                setContent(
                    <GeographyEntry>
<GeographyEntryImg><img src={Icon7} width={"100%"}></img><GeographyEntryDescription>
Mitla, Oaxaca, Mexico<br/> Alana Coghlan, photographer, 2013
</GeographyEntryDescription>
</GeographyEntryImg>
<GeographyEntryText>
Notice the architectural details carved into these ancient walls at Mitla. Today, Zapotec weavers integrate a variety of design details from Mitla’s buildings into their textile designs.
</GeographyEntryText>
</GeographyEntry>
                );
                openModal();
            }
        }></img>
    </GeographyMosaic5>

<GeographyMosaic6 className={"mosaic"}>
    <img src={Icon1} height={"100%"} width={"100%"} onClick={
        () => {
            setContent(
            <GeographyEntry>
<GeographyEntryImg><img src={Icon1} width={"100%"}></img><GeographyEntryDescription>
Homenaje á Cristóbal Colón: Antigüedades Méxicanas, Lienza 27.<br/> Fray Angelico Chavez History Library/New Mexico History Museum, 972MexH</GeographyEntryDescription></GeographyEntryImg>
<GeographyEntryText>La Malinche, a Nahua woman, interprets for Hernan Cortés in a discussion with Tlaxcalans about forming an alliance against the Aztecs. Notice the Tlaxcalans wearing textiles draped like cloaks. These weavings may have influenced the Saltillo sarape’s design and how it was worn.</GeographyEntryText>
</GeographyEntry>
        );
        openModal();
            }
    }></img>
    
</GeographyMosaic6>

<GeographyMosaic7 className={"mosaic"}>
<img src={Color1} height={"100%"} width={"100%"}></img>
</GeographyMosaic7>

<GeographyMosaic8 className={"mosaic"}>
<img src = {Color1} height={"100%"} width={"100%"}></img>
</GeographyMosaic8>

<GeographyMosaic9 className={"mosaic"}>
<img src = {Icon11} height={"100%"} width={"100%"} onClick={
    () =>{
        setContent(
            <GeographyEntry>
<GeographyEntryImg><img src={Icon11} height={"100%"} width={"100%"}></img></GeographyEntryImg>
<GeographyEntryText>By the early 1600s, the 1,500-mile-long northern trade route, El Camino Real de Tierra Adentro, was established, taking both Spanish and Indigenous Mexican influence into what is today New Mexico. El Camino Real means the Royal Road, sometimes referred to as the King’s Road because it was controlled by the King of Spain or his representatives. It connected the Spanish Colonial capital at Mexico City to Ohkay Owingeh (the Pueblo of San Juan) near Santa Fe, New Mexico. Thousands of settlers, along with militia, friars, and priests, used this road for colonization and commerce, which in turn helped carry the Saltillo sarape northward.</GeographyEntryText>

</GeographyEntry>
        );
        openModal();
    }
}></img>
</GeographyMosaic9>

<GeographyMosaic10 className={"mosaic"}>
<img src = {Icon3} height={"100%"} width={"100%"} onClick={
    () => {
    setContent(
<GeographyEntry wide={true}>
<GeographyEntryImg wide={true}><img src={Icon3} width={"100%"}></img>
</GeographyEntryImg>
<GeographyEntryText wide={true}>
Monte Albán was the most important center of the Zapotec civilization politically, economically, and culturally. One of the oldest Mesoamerican cities, it was inhabited for nearly 1,500 years by a succession of Olmecs, Zapotecs, and Mixtecs until about 850 CE (1,270 years ago). 
</GeographyEntryText>
<GeographyEntryDescription wide={true}>
Monte Albán, Oaxaca, Mexico<br/> Dana Danielson, photographer, 2013
</GeographyEntryDescription>
</GeographyEntry>
    );
    openModal();
    }
}></img>

</GeographyMosaic10>


<GeographyMosaic11 className={"mosaic"}>
<img src = {Icon4} height={"100%"} width={"100%"} onClick={
    () => {
        setContent(
        <GeographyEntry wide={true}>
<GeographyEntryImg wide={true}><img src={Icon4} width={"100%"}></img>
</GeographyEntryImg>
<GeographyEntryDescription wide={true}>
Teotitlán del Valle, Oaxaca, Mexico<br/> Joe Coca, photographer, 2019
</GeographyEntryDescription>
</GeographyEntry>);
openModal();
    }
}></img>


</GeographyMosaic11> 

<GeographyMosaic12 className={"mosaic"}>
<img src = {Icon11} height={"100%"} width={"100%"} onClick={
    () => {
        setContent(
            <GeographyEntry>
<GeographyEntryImg><img src={Icon11} height={"100%"} width={"100%"}></img>
</GeographyEntryImg>
<GeographyEntryText>
The original source of the sarape’s patterns, including the central diamond and circular medallion, is still debated and remains a bit of a mystery. The central diamond was a prominent design on ancient Zapotec architecture, and is still used on Saltillo sarapes. The Zapotec civilization is among the oldest in Mexico, and it was one of the most sophisticated in early Mesoamerica. For more than 2,500 years, the Zapotecs have lived in Oaxaca’s central valley. Early on, they developed impressive trade networks, exchanging weavings, pottery, jewelry, and foods. Their architecture and engineering skills are evidenced in their two ancient capital cities, Mitla and Monte Albán, and related irrigation systems. They also developed hieroglyphic writing, mathematics, and a calendar.The Zapotec town of Teotitlán del Valle, Oaxaca, remains one of the most important weaving centers in Mexico. About 80 percent of the population of 6,000 are involved in some aspect of the weaving tradition, and most people still earn their living as weavers. With nearly a million members, today Zapotecs are the third-largest Indigenous group in Mexico. The majority live in their ancestral homeland in the state of Oaxaca, but there are also large populations outside Mexico, most notably in California (an estimated 80,000 reside in the Los Angeles area) and, to a lesser degree, in other parts of the United States.
</GeographyEntryText>
</GeographyEntry>
        );
        openModal();
    }
}></img>
</GeographyMosaic12>
<GeographyMosaic13 className={"mosaic"}>
<img src = {Color1} height={"100%"} width={"100%"}></img>
</GeographyMosaic13>
<GeographyMosaic14 className={"mosaic"}>
<img src = {Color1} height={"100%"} width={"100%"}></img>
</GeographyMosaic14>
<GeographyMosaic15 className={"mosaic"}>
<img src = {Icon5} height={"100%"} width={"100%"} onClick={
    () => {
        setContent(

<GeographyEntry wide={true}>
<GeographyEntryImg wide={true}><img src={Icon5} width={"100%"}></img>
</GeographyEntryImg>
<GeographyEntryDescription wide={true}>
Teotitlán del Valle, Oaxaca, Mexico<br/> Javier Lazo, photographer, 2019
</GeographyEntryDescription>
</GeographyEntry>
        );
        openModal();
    }
}></img>
</GeographyMosaic15>
<GeographyMosaic16 className={"mosaic"}>
<img src = {Icon8} height={"100%"} width={"100%"} onClick={
    () => {
        setContent(
            <GeographyEntry>
<GeographyEntryImg><img src={Icon8} height={"100%"} width={"100%"}></img><GeographyEntryDescription>
Mitla, Oaxaca, Mexico<br/> Alana Coghlan, photographer, 2013
</GeographyEntryDescription>
</GeographyEntryImg>
<GeographyEntryText>
Textile fragment with indigo design, c. 1250–1500 CE  Casas Grandes, northern Sierra province, Río Chico region, Chihuahua, Mexico ASM 22551
</GeographyEntryText>
</GeographyEntry>
        );
        openModal();
    }
}></img>
</GeographyMosaic16>
<GeographyMosaic17 className={"mosaic"}>
<img src = {Color1} height={"100%"} width={"100%"}></img>
</GeographyMosaic17>


    
    
</GeographyMosaicParent>
<br/><br/>
<h1>Natural Dyeing</h1>
<HeaderText>The natural-dye practice involves chemistry, spiritual beliefs, and a deep understanding of the forces of nature. The shades of color a plant gives can vary greatly depending on where it was grown and whether the plant received enough water for the season—which makes the hue a living imprint of that particular season. This is how we know that nature is divine and that the plants are alive, just like us. It can take a lifetime to understand the depth of this practice. The Zapotec have been coloring yarns with natural dyes for thousands of years. However, this practice was threatened by the introduction of synthetic dyes, which enabled weavers to produce textiles more quickly for a growing commercial market. Over time, many Zapotec villages abandoned the more labor-intensive tradition of working with plants, minerals, and insects. While less expensive and easier to use then natural dyes, chemical dyes can also be highly toxic, particularly in large amounts. They present a threat to the health of the dyers who use them and to the environment when they are disposed of in the ground or in water systems. Today, only a few families in Teotitlán del Valle continue the ancient tradition of producing and using natural dyes. I am working to preserve this knowledge through my studio’s work and by teaching others. By reviving this tradition, my family and I are helping to preserve Zapotec identity and the environment.</HeaderText>

 </GeographyContainer>
</>
    )
}

export default Dyeing;