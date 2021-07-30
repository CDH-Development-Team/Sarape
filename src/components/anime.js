import React from 'react';
import styled from "styled-components";

const ModalImg2 = styled.img`
`;

const AnimeList = ({imgSrc}) => {

        return (
            <>
                <div>
                    This is the Picture
                </div>
                <div>
                    <ModalImg2 src = {imgSrc}/>
                </div>
            </>
        )

}

export default AnimeList;