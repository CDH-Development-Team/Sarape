import React from 'react';

import { GeographyContainer, MosaicWrapper, MosaicImg, HeaderText, GeographyEntry, GeographyEntryText, GeographyEntryImg, GeographyEntryDescription, GeographyStatues, Statue, StatueImg, BackgroundDiv, BackgroundContentLeft, BackgroundContentRight, BackgroundImg} from '../Geography/geographyElements.js';
import headerImg from '../../images/section 2/history/header.jpg'
import Icon1 from '../../images/section 2/history/1.png'
import Icon2 from "../../images/section 2/history/2.png"
import Icon3 from "../../images/section 2/history/3.png"
import Icon4 from "../../images/section 2/history/4.png"
import Icon5 from "../../images/section 2/history/5.png"
import Icon6 from "../../images/section 2/history/6.png"
import Icon7 from "../../images/section 2/history/7.png"

const History = () =>{
    return(
<>
 <GeographyContainer>
 <img src={headerImg} width={'100%'}></img>
<br/><br/>
<h1> History and Geography</h1>
<BackgroundDiv>
    <BackgroundImg><img src={Icon1} width={"100%"}/>
    <BackgroundContentLeft>
    Zoque woman weaving on a backstrap loomTuxtla Gutiérrez, Chiapas, MexicoDonald Cordry, photographer, 1940ASM Cordry 1143
    </BackgroundContentLeft>

    <BackgroundContentRight>
    The Indigenous peoples of the Americas have a long and rich history of weaving. Chroniclers of Cortes’s expedition described the Tlaxcalan people as being dressed in clothing that was finely woven and adorned with precious metals and feathers. Indigenous weavers wove clothing using plant fibers, including cotton and ixtle, the fiber of the maguey or agave plant, on backstrap tension looms which are still used today. A backstrap loom’s warp threads are either looped around two rods or tied to them. The top rod is secured with twine to a stationary object; the bottom rod is attached to a strap around the weaver’s waist. This allows the weaver to regulate the tension by moving her body slightly closer to, or farther from, a stationary point.
    </BackgroundContentRight>
    </BackgroundImg>
</BackgroundDiv>

<GeographyEntry>
    <GeographyEntryImg><img src={Icon2} width={"100%"}/>
    </GeographyEntryImg>

    <GeographyEntryText>
    How people dress and adorn themselves has long served as a form of identity, signaling culture and status. During the time of the Aztec empire (1345–1521 CE), both custom and law controlled what people could wear according to their class. The influence of the Spaniards on Indigenous lifeways, including their clothing, can be seen through illustrations in codices* produced under Spanish rule.<br/><br/> The Codex Mendoza illustrates Aztec people of high status, priests, and rulers wearing tilmàtli, decorated cloaks woven of cotton or ixtle on a backstrap loom. The motifs and materials of the tilmàtliindicated the wearer’s class and rank. It is possible that the Saltillo sarape’s designs and how it was worn were influenced by the tilmàtli.<br></br><br></br><br></br>*Codices is the plural of codex. 
<br/><br/><br/><br/><br/><br/>right<br></br>Notice how the tilmàtli are similar to the Saltillo sarape in design and how they were worn.<br/><br/>Codex Mendoza, Folio 65r, c. 1541–1542<br/>Viceroyalty of Spain<br></br>Bodleian Library, Oxford University
    </GeographyEntryText>
</GeographyEntry>

<GeographyEntry>
<GeographyEntryImg><img src={Icon3} width={"100%"}></img></GeographyEntryImg>
<GeographyEntryText>
excoco ruler Nezahualpilli shown wearing a xiuhtilmatli (blue cape), which would have been woven on a backstrap loom. Note the complex designs and the natural dye colors: blue from the indigo plant and red from cochineal insects.
</GeographyEntryText>
</GeographyEntry>

<GeographyEntry wide={true}>
    <GeographyEntryImg wide={true} style={{padding:"0px 50px"}}>
        <img src = {Icon4} width={"100%"}></img>
    </GeographyEntryImg>
    <GeographyEntryText wide={true}>
    The Aztecs’ tilmàtli, tied at the shoulder as depicted in several codices, is also part of the sarape’s cultural lineage. This style is similar to a poncho.
    </GeographyEntryText>
    <GeographyEntryDescription wide={true}>
    Codex Primeros Memoriales, Vol. 3, Estampa 21<br></br>Bernardino Sahagún, Historia General de las Cosas de Nueva España Biblioteca Medicea Laurenziana
    </GeographyEntryDescription>
</GeographyEntry>

<GeographyEntry wide={true}>
    <GeographyEntryImg wide={true}>
        <img src={Icon5} width={"100%"} style={{padding:"0px 50px"}}></img>
    </GeographyEntryImg>
    <GeographyEntryText wide={true}>
    Codices are illustrated texts written on long strips of deer hide, cotton cloth, or bark paper. Mixtec codices often depict life prior to Spanish arrival. 
    </GeographyEntryText>

    <GeographyEntryDescription wide={true}>
    Facsimile (1963) of Codex Vindobonensis Mexicanus<br/>Mixtec, 1677 <br></br>ASM Library. F.1219.V63
    </GeographyEntryDescription>
</GeographyEntry>

<GeographyEntry>
    <GeographyEntryImg>
        <img src={Icon6} width={"100%"}></img>
    </GeographyEntryImg>
    <GeographyEntryText>
    Sarapes are worn in many ways: wrapped or draped like a shawl, over one shoulder, or as a poncho. The typical sarape may be woven in one piece, but more frequently consists of two panels joined together leaving a neck slit, also called a bocamanga, through which the wearer’s head could fit.In Spanish Colonial times, the sarape was mainly worn in northern Mexico by hacendados, or ranch owners, who traveled on horseback. The sarape’s loose fit made it a practical riding garment. Later, it became a status symbol worn by wealthy “city folk.” While anyone could wear one, they were expensive to buy. These textiles were masterfully woven with incredible tightness and complex designs. It is possible that they were created in small workshops, located on many of the large ranches or haciendas
    </GeographyEntryText>
    <GeographyEntryDescription>
    Rancheros, 1836 <br/>Carl Nebel   <br/>German, 1805–1855<br/>Lithograph<br/>Voyage Pittoresque et Archéologique dans la Partie la plus Intéressante du MéxiqueAlbum, Alamy Stock Photo
    </GeographyEntryDescription>
</GeographyEntry>

<GeographyEntry>
    <GeographyEntryImg>
        <img src={Icon7} width={"100%"}></img>
    </GeographyEntryImg>
    <GeographyEntryText>
    The Spanish capa (cape), a large overcoat with an open front and often a hood, may have been an influence on the sarape as a more formal garment. 
    </GeographyEntryText>

    <GeographyEntryDescription>
    Spanish cape, late 1500s <br/>Silk, metal thread <br/>Purchase, Rogers Fund, 1939<br/>The Metropolitan Museum of Art, 39.53
    </GeographyEntryDescription>
</GeographyEntry>
 </GeographyContainer>
</>
    )
}

export default History;