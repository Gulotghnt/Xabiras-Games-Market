import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Logo from "../../apends/xmg.jpg"


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.BarraSuperior /> {}
      <C.StyledImage src={Logo} alt="Logo do App" title="Logo do App" />
      <C.Label>Biblioteca</C.Label>
      <C.Label2>Explorar jogos</C.Label2>
      <C.Label3>Perfil</C.Label3>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
