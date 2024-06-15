import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../apends/xmg.jpg";


const CadastroJogos = () => {
  const [nome, setNome] = useState("");
  const [gênero, setGen] = useState("");
  const [descrição, setDesc] = useState("");
  const [developer, setDev] = useState("");
  const [data_publicação, setDate] = useState("");
  const [preço, setPrice] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignup = () => {
    if (!nome | !gênero | !descrição| !developer| !data_publicação|!preço) {
      setError("Preencha todos os campos");
      return;
    
    }


      
    alert("Jogo cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.StyledImage src={Logo} alt="Logo do App" title="Logo do App" />
      <C.Label>CADASTRO DE JOGOS</C.Label>
      <C.Content>
        <Input
          type="nome"
          placeholder="Digite nome do jogo"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="gênero"
          placeholder="Digite o gênero"
          value={gênero}
          onChange={(e) => [setGen(e.target.value), setError("")]}
        />
        <Input
          type="descrição"
          placeholder="Digite a descrição"
          value={descrição}
          onChange={(e) => [setDesc(e.target.value), setError("")]}
        />
        <Input
          type="developer"
          placeholder="Digite o desenvolvedor"
          value={developer}
          onChange={(e) => [setDev(e.target.value), setError("")]}
        />
        <Input
          type="data"
          placeholder="dd/mm/aa"
          value={data_publicação}
          onChange={(e) => [setDate(e.target.value), setError("")]}
        />
        <Input
          type="preço"
          placeholder="$preço$"
          value={preço}
          onChange={(e) => [setPrice(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={handleSignup} />
        <C.LabelSignin>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default CadastroJogos;
