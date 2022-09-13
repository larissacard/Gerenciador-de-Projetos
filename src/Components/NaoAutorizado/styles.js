import styled from 'styled-components';

import permissao_svg from './assets/permissao_acesso.svg'
import permissao_mobile_svg from './assets/permissao_acesso_mobile.svg'

export const Container = styled.div`
    background-color: #F1F1F1;
    width: 100vw;
    height: 100vh;

    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center;

    > h5 {
        color: #280948;
    }

    div { 
        margin-top: 50px;
        background-image: url(${permissao_svg});
        width: 712px;
        height: 570px;  
    }

    @media (max-width: 480px) {
        div {
            margin-top: 100px;
            margin-bottom: 20px;
            background-image: url(${permissao_mobile_svg});
            width: 380px;
            height: 286px;
            word-wrap: normal;
        }
    }
`;