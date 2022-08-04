import styled from "styled-components";

export const Container = styled.div`
    height: 443px;
`

export const Title = styled.div`
    color: #280948;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-left: 0.5rem;
`
export const Input = styled.input`
    font-size: 14px;
    line-height: 21px;
    width: 100%;
    padding: 5px;
    margin: 5px;
    background: none;
    border: 2px solid #280948;
    border-radius: 20px;
    color: #764BA2;
    ::placeholder {
        color: #764BA2;
  }
`

export const Save = styled.button`
    background-color: #67CB65;
    width: 82px;
    height: 30px;
    font-size: 14px;
    line-height: 20px;
    color: white;
    border-radius: 20px ;
    text-align: center;
`
export const Delete = styled.button`
    background-color: #E74444;
    width: 150px;
    height: 30px;
    font-size: 14px;
    line-height: 20px;
    color: white;
    border-radius: 20px ;
    text-align: center;
    font-size: 14px;
`

export const Lembrete = styled.div`
    background: rgba(118, 75, 162, 0.5);
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 27px;
    height: 60px;
    border-radius: 20px;
    margin-top: 1rem;
    margin-left: 0.5rem;
    width: 95%;
    
`
export const Notas = styled.div`
    height: 253px;
    width: 100%;
    margin-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;

        ::-webkit-scrollbar-thumb{
        background: #764BA2;
        border-radius: 10px;
        width: 5px;
    }
        
    ::-webkit-scrollbar{
        background-color: #F5F5F7;
        width: 5px;
        border-radius: 10px;
    }
`