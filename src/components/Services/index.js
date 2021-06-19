import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import Icon4 from '../../textiles_png/3_textiles/AT-2020-16-2.png';
import Icon5 from '../../textiles_png/3_textiles/AT-2020-16-3.png';
import Icon6 from '../../textiles_png/3_textiles/AT-2020-16-4.png';
import Icon7 from '../../textiles_png/3_textiles/AT-2020-16-5.png';
import Icon8 from '../../textiles_png/3_textiles/AT-2020-16-6.png';
import Icon9 from '../../textiles_png/3_textiles/AT-2020-16-7.png';


import {fragmentOne, fragmentTwo, fragmentThree, fragmentFour, fragmentFive, fragmentSix} from './Fragment/FragmentsData.js';

import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP,
	FragmentQuote,
	FragmentDiv,
	FragmentCite } from './ServicesElements';
	
import Fragment from './Fragment/index.js';

const Services = () => {
    return (

        <ServicesContainer id="services">
            <ServicesH1>FRAGMENT SERIES BY PORFIRIO GUTIERREZ</ServicesH1>
<ServicesP>
<b>My ongoing Fragment series is my interpretation of one of the most remarkable weaving traditions created by the blending of Native American and European traditions. These pieces reflect how the merger created new forms of expression in the art of weaving. This style of weaving became part of our Mexican cultural identity and remains part of my personal expression. My Fragment series pays homage to our ancestral weavers, who, in many cases, were slaves yet they contributed their unique design sensibilities and left an artistic legacy we can still appreciate and respect today.
</b>
<br /><br />For more information go to porfiriogutiérrez.com
</ServicesP>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    {/* <ServicesH2>Virtual offices</ServicesH2> */}
                    {/* <ServicesP>You can access our platform from anywhere.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2> */}
                    {/* <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon7}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon9}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership to get 5% cashback.</ServicesP> */}
                </ServicesCard>
            </ServicesWrapper>
<FragmentQuote><FragmentDiv>
"This art form is a deep part of my culture and is my life. It is like my native language or our ceremonies. The cochineal produces a color just like the color of our blood; the weft and the warp are like the tissue in our body. Textiles are our second skin as well as a means of expression.""
<br /><br /><FragmentCite>
Porfirio Gutiérrez
</FragmentCite>
</FragmentDiv></FragmentQuote>
<Fragment {...fragmentOne}/>
<Fragment {...fragmentTwo}/>
<Fragment {...fragmentThree}/>
<Fragment {...fragmentFour}/>
<Fragment {...fragmentFive}/>
<Fragment {...fragmentSix}/>
        </ServicesContainer>
    )
}

export default Services;
