import React from 'react';

import { HiOutlineLogout } from "react-icons/hi";
import {useLocation} from 'react-router-dom';

import {
    Container,
    ContLogo,
    Logo,
    NavMenu,
    MenuButton,
    ImgProjetos,
    ImgEquipes,
    ImgPessoas,
    Logout,
} from './styles';


function SideBar() {

    // Pegando a rota que está sendo usada para saber qual botão
    // ficará com o status de ativo
    let url = useLocation().pathname;

    return (
        <>
        <Container>
            {/* Logo da Brisanet, que está sendo carregado por um svg em 'src/styles/Icons.js' */}
            <ContLogo>
                <Logo/>
            </ContLogo>

            <NavMenu>
                <a href="/projetos"> 
                    <MenuButton>
                        <ImgProjetos className={url.substring(0,9) === '/projetos' || url === '/' ? 'active' : ""}/>
                        <span className={url.substring(0,9) === '/projetos' || url === '/' ? 'active' : ""}>Projetos</span>
                    </MenuButton> 
                </a>

                <a href="/equipes">
                    <MenuButton>
                        <ImgEquipes className={url.substring(0,8) === '/equipes' ? 'active' : ""}/>
                        <span className={url.substring(0,8) === '/equipes' ? 'active' : ""}>Equipes</span>
                    </MenuButton> 
                </a>

                <a href="/pessoas">
                    <MenuButton>
                        <ImgPessoas className={url.substring(0,8) === '/pessoas' ? 'active' : ""}/>
                        <span className={url.substring(0,8) === '/pessoas' ? 'active' : ""}>Pessoas</span>
                    </MenuButton> 
                </a>
            </NavMenu>

            <Logout data-cy="sair" onClick={() => {
                localStorage.setItem('token', null)
                window.location.href = '/login'
            }}>
                < HiOutlineLogout size={28} color={'rgba(255, 255, 255, 0.6)'}/><span>Sair</span>   
            </Logout>
            
        </Container>

        </>
    );
}

export default SideBar;