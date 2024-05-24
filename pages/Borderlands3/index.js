import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import * as C from "./styles";
import Logo from "../../apends/xmg.jpg"
import img2 from "../../apends/img2.jpg"




const Borderlands3 = () => {
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
      <C.Label4>O jogo de tiro e saque original voltou, trazendo milhares de armas e uma nova aventura movida a caos! Exploda novos inimigos em mundos inéditos como um dos quatro Caça-Arcas novos, com árvores de talentos, habilidades e personalização robustas.</C.Label4>

      <C.mm src={img2} alt= "game1" title = "Raft"/>
      
      <Button Text="Retornar" onClick={() => [ navigate("/home")]}>
        Retornar
      </Button>
      
      

        
      
    </C.Container>
    
  );
};

export default Borderlands3;
