import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;
`;

export const StyledImage = styled.img`
  position: fixed;
  display: flex;
  top: 5vh; 
  left: 2vw; 
  width: 10vw; 
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.4);
  z-index: 999;
`; 



export const BarraSuperior = styled.div`
  background-color: #333; /* Cor da barra */
  height: 110px; /* Altura da barra */
  width: 100%; /* Largura total */
  position: fixed; /* Fixa a barra no topo da página */
  top: 0; /* Posiciona a barra no topo */
  left: 0; /* Posiciona a barra no canto esquerdo */
  background-color: rgba(255, 0, 0, 0.4);
`;

export const Label = styled.label`
  position: fixed;
  display: flex;
  flex-direction: line;
  top: 30px;
  left: 240px; 
  font-size: 24px;
  font-weight: 600;
  color: #f0f0f0;
  border: 2px solid #000;
  padding: 10px 20px;

  background-color: rgba(0,0,5,.2);
  border-radius: 6%;
`; 

export const Label2 = styled.label`

  position: fixed;
  display: flex;
  flex-direction: line;
  top: 30px;
  left: 420px; 
  font-size: 24px;
  font-weight: 600;
  color: #f0f0f0;
  border: 2px solid #000;
  padding: 10px 20px;

  background-color: rgba(0,0,5,.2);
  border-radius: 6%;
`;

export const Label3 = styled.label`

  position: fixed;
  display: flex;
  flex-direction: line;
  top: 30px;
  left: 652px; 
  font-size: 24px;
  font-weight: 600;
  color: #f0f0f0;
  border: 2px solid #000;
  padding: 10px 20px;

  background-color: rgba(0,0,5,.2);
  border-radius: 6%;
`; 

export const Title = styled.h2``;
