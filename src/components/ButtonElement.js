import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border-color: #fff;
    border: 1px solid white;
    text-decoration: none;

    &:hover {
        border: none;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : 'rgba(173, 0, 66,1)')};
    }
`;