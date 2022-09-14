import styled from "styled-components";

import erro404 from './assets/erro404.svg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: #F1F1F1;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > h5 {
        color: #280948;
    }
`;

export const Image = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
    background-image: url(${erro404});
    width: 712px;
    height: 500px; 
`;