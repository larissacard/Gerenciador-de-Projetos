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
    ImgPessoas
} from './styles';

function Header() {

    // Pegando a rota que está sendo usada para saber qual botão
    // ficará com o status de ativo
    let url = useLocation().pathname;

    return (
        <Container>
            {/* Logo da Brisanet, que está sendo carregado por um svg em 'src/styles/Icons.js' */}
            <ContLogo>
                <Logo/>
            </ContLogo>

            {/* Os Botões do menu estão passando por uma renderização condicional
                Que permite mostrar os botões destacados quando você está em
                determinada página */}

            <NavMenu>
                <a href="/projetos">
                  { url.substring(0,9) === '/projetos' || url === '/' 
                    ? <MenuButton>
                        <ImgProjetos className='active'/>
                        <span className='active'>Projetos</span>
                    </MenuButton> 
                    : <MenuButton>
                        <ImgProjetos/>
                        <span>Projetos</span>
                    </MenuButton>
                  } 
                </a>

                <a href="/equipes">
                  { url.substring(0,8) === '/equipes'
                    ? <MenuButton>
                        <ImgEquipes className='active'/>
                        <span className='active'>Equipes</span>
                    </MenuButton> 
                    : <MenuButton>
                        <ImgEquipes/>
                        <span>Equipes</span>
                    </MenuButton>
                  } 
                </a>

                <a href="/pessoas">
                  { url.substring(0,8) === '/pessoas'
                    ? <MenuButton>
                        <ImgPessoas className='active'/>
                        <span className='active'>Pessoas</span>
                    </MenuButton> 
                    : <MenuButton>
                        <ImgPessoas/>
                        <span>Pessoas</span>
                    </MenuButton>
                  } 
                </a>

                <a href="/tarefas">
                  { url.substring(0,8) === '/tarefas'
                    ? <MenuButton>
                        <ImgTarefas className='active'/>
                        <span className='active'>Tarefas</span>
                    </MenuButton> 
                    : <MenuButton>
                        <ImgTarefas/>
                        <span>Tarefas</span>
                    </MenuButton>
                  } 
                </a>
            </NavMenu>
        </Container>
    );
}

export default Header;
