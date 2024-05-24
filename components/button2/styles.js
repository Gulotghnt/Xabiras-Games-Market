import styled from "styled-components";

export const button2 = styled.button`
position: relative;
border: none;
 

  padding: 0;
    border-radius: 12px;
    width:20vw;
    height: 10vw;
    width: 100;
    cursor: pointer;
    background-image: ${props => props.backgroundImage}; /* Aplica a imagem de fundo */
    background-size: cover; /* Ajusta o tamanho da imagem */
    background-position: center; /* Centraliza a imagem */
`;

