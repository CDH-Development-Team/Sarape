import React from 'react';
import styled from 'styled-components';

const MosaicWrapper = styled.div`
    
`;
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#4a0033'      
    }
};

const FamilyMosaic = () => {
    return (
        <MosaicWrapper>
            <table>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>80</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            </table>
        </MosaicWrapper>
    )
}

export default FamilyMosaic;
