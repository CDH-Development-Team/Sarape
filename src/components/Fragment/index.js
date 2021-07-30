import React from 'react';

import { FragmentContainer, FragmentWrapper, Column1, Column2, ImgWrap, Img, FragmentH1, Description } from './FragmentsElements.js';

const Fragment = ({headline, img, description1, description2, id}) => {
    return (
        <>
            <FragmentContainer id={id}>
                <FragmentWrapper>
                        <Column1>
                            <FragmentH1>{headline}</FragmentH1>
                        </Column1>    
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
					<Description>{description1}</Description>
                        </Column2>  
                </FragmentWrapper>   
            </FragmentContainer> 
        </>
    );
}

export default Fragment;
