import React from 'react';
import {useLocation} from 'react-router-dom';

import {
    Container,
    ContLogo,
    Logo,
    NavMenu,
    MenuButton,
    ImgTarefas,
    ImgProjetos,
    ImgEquipes,
    ImgPessoas,
    HeaderTwo
} from './styles';

function Header() {

    // Pegando a rota que está sendo usada para saber qual botão
    // ficará com o status de ativo
    let url = useLocation().pathname;

    return (
        <div>
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

                {/* <a href="/tarefas">
                    <MenuButton>
                        <ImgTarefas className={url.substring(0,8) === '/tarefas' ? 'active' : ""}/>
                        <span className={url.substring(0,8) === '/tarefas' ? 'active' : ""}>Tarefas</span>
                    </MenuButton> 
                </a> */}
            </NavMenu>
        </Container>

        <HeaderTwo>
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

                {/* <a href="/tarefas">
                    <MenuButton>
                        <ImgTarefas className={url.substring(0,8) === '/tarefas' ? 'active' : ""}/>
                        <span className={url.substring(0,8) === '/tarefas' ? 'active' : ""}>Tarefas</span>
                    </MenuButton> 
                </a> */}
            </NavMenu>
        </HeaderTwo>

        </div>
    );
}

export default Header;
