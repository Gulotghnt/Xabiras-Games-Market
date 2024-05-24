import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import * as C from "./styles";
import Logo from "../../apends/xmg.jpg"
import img3 from "../../apends/img3.jpg"




const ManorLords = () => {
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
      <C.Label4>Manor Lords é um jogo de estratégia medieval com um detalhado sistema de construção de cidades, batalhas táticas em grande escala e complexas simulações econômicas e sociais. Seja um senhor medieval através das estações, das mudanças no clima e das ascensões e quedas das cidades.</C.Label4>

      <C.mm src={img3} alt= "game1" title = "ManorLords"/>
      
      <Button Text="Retornar" onClick={() => [ navigate("/home")]}>
        Retornar
      </Button>
      
      

        
      
    </C.Container>
    
  );
};

export default ManorLords;
