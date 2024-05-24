import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Button2 from "../../components/button2";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Logo from "../../apends/xmg.jpg"
import img1 from "../../apends/img1.jpg"
import img2 from "../../apends/img2.jpg"
import img3 from "../../apends/img3.jpg"



const Home = () => {
  const { signout } = useAuth();
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
      Jogos em destaque

      <Button2 onClick={() => navigate("/Raft")}backgroundImage={`url(${img1})`} />
      <Button2 onClick={() => navigate("/Borderlands3")}backgroundImage={`url(${img2})`} />
      <Button2 onClick={() => navigate("/ManorLords")}backgroundImage={`url(${img3})`} />



      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
