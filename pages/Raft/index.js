import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import * as C from "./styles";
import Logo from "../../apends/xmg.jpg"
import img1 from "../../apends/img1.jpg"




const Raft = () => {
  const navigate = useNavigate();



  
  return (
    
    <C.Container>
       

      <C.BarraSuperior></C.BarraSuperior> 
      <C.StyledImage src={Logo} alt="Logo do App" title="Logo do App" />
      
      <C.Label>
        
      <Button Text="Biblioteca" onClick={() => []}>
        </Button>
      </C.Label>
      
      <C.Label2><Button Text="Loja" onClick={() => []}> </Button></C.Label2>
      <C.Label3><Button Text="Perfil" onClick={() => [navigate("/perfil")]}> </Button></C.Label3>
      <C.Label4>Raft™ lança você e seus amigos em uma aventura oceânica épica! Sozinhos ou juntos, os jogadores lutam para sobreviver a uma viagem perigosa através de um vasto mar! Reúna detritos, vasculhe recifes e construa sua própria casa flutuante, mas tome cuidado com os tubarões comedores de gente!</C.Label4>

      <C.mm src={img1} alt= "game1" title = "Raft"/>
      
      <Button Text="Retornar" onClick={() => [ navigate("/home")]}>
        Retornar
      </Button>
      
      

        
      
    </C.Container>
    
  );
};

export default Raft;
