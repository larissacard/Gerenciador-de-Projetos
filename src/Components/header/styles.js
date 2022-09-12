import styled, { css } from 'styled-components';

import { HiOutlineLogout } from "react-icons/hi";

import {
    Brisanet,
    Projetos,
    Equipes,
    Pessoas,
} from '../../styles/Icons'


export const Container = styled.div`
    background-color: var(--roxo);
    height: calc(100% - 48px);
    width: 16.67%;
    min-width: 200px;
    margin: 24px 10px 24px 24px;
    border-radius: 24px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;
    
    font-weight: 500;
    
    @media (max-width: 1280px) {
        min-width: 65px;
    }
    
    @media (max-width: 480px) {
        display: flex;
        flex-direction: row-reverse;

        width: 100%;
        height: 50px;

        border-radius: 0;

        margin: 0;

        align-items: center;
    }
`;

export const HeaderTwo = styled.div`
    background-color: var(--roxo);
    width: 100%;
    height: 40px;
    display: none;
    
    /* @media (max-width: 480px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
    } */
`;

export const ContLogo = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;

    @media (max-width: 480px) {
        display:none;
    }
`;

export const Logo = styled(Brisanet)`
    width: 90%;
    height: auto;
`;

export const NavMenu = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    > a {
        text-decoration: none;
    }
    
    @media (max-width: 480px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
`;

export const MenuButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    
    transition-duration: .3s;
    
    > span {
        margin-left: 15px;
        color: rgba(255, 255, 255, 0.6);;
    }
    
    @media (max-width: 1280px) {
        > span {
            display: none;
        }
    }
    
    
    :hover {
        transform: scale(1.05);
        transition-duration: .3s;
    }
`;

const iconCSS = css`
    height: 50px;
    width: 50px;
    
    path {
        fill: rgba(255, 255, 255, 0.4);;
    }
    
    @media (max-width: 1280px) {
        height: 40px;
        width: 40px;
    }
    `; 

    export const Logout = styled.div`
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 20px;
        cursor: pointer;
        padding: 3px 15px;

        > span {
        margin-left: 8px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 18px;
        }

        @media (max-width: 1280px) {
            > span {
                display: hidden;
            }
        }

        @media (max-width: 480px) {
            padding: 0;
            bottom: 0;
            position: relative;
            margin-left: 30px;

            
        }

        :hover {
            transform: scale(1.05);
            transition-duration: .3s;
        }
    `;

// export const ImgTarefas = styled(Tarefas)`${iconCSS}`;
export const ImgProjetos = styled(Projetos)`${iconCSS}`;
export const ImgEquipes = styled(Equipes)`${iconCSS}`;
export const ImgPessoas = styled(Pessoas)`${iconCSS}`;
export const ImgLogout = styled(Logout)`${<HiOutlineLogout />}`