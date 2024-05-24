import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";
import Logo from "../../apends/xmg.jpg"



const Loja = () => {
  const navigate = useNavigate();



  
  return (
    
    <C.Container>
       

      <C.BarraSuperior></C.BarraSuperior> 
      <C.StyledImage src={Logo} alt="Logo do App" title="Logo do App" />
      <C.Label>
      <Button Text="Biblioteca" onClick={() => []}>
        </Button>
      </C.Label>
      <C.Label2><Button Text="Loja" onClick={() => [navigate ("/Loja")]}> </Button></C.Label2>
      <C.Label3><Button Text="Perfil" onClick={() => [navigate("/perfil")]}> </Button></C.Label3>
     
    </C.Container>
  );
};

export default Loja;
