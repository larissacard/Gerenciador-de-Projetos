import styled from "styled-components";

export const Icon = styled.div`
display: flex;
justify-content: center;
align-self: center;
    img{
        width: 10.81rem;
        height: 11.25rem;
        
        border-radius: 100px;

        margin-bottom: 20px;
    }
`;

export const Open = styled.button`
    background-color: transparent;
    border: 2px solid #764BA2; 
    border-radius: 10px; 

    width: 14rem; 
    height: 3.30rem; 

    color: #764BA2; 

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 120px;
    margin-bottom: 20px;
`;

export const Close = styled.button`
    border: 1px solid #E74444;
    border-radius: 10px;

    color: #E74444;
    background-color: transparent;

    width: 80px;
    height: 50px;

    margin-top: 20px;
`;

export const Text = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    
    color: #764BA2;
`;

export const Catalogo = styled.div`
    display: flex;
    justify-content: space-around;

    margin-left: 10px;
    margin-right: 10px;
`;

export const Pic = styled.button`
    background-color: transparent;
    img{
        width: 4.10rem;
        height: 4rem;

        border-radius: 50px;

    }
`;