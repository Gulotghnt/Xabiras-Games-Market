import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;


export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #f0f0f0;
`; 

export const StyledImage = styled.img`
  position: top;
  top: 30; 
  width: 130px; 
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.4);  
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #f0f0f0;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: underline;
    color: #f0f0f0;
  }
`;
