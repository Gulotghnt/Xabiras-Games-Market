import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Perfil from "../pages/Perfil";
import Raft from "../pages/Raft";
import Borderlands3 from "../pages/Borderlands3";
import ManorLords from "../pages/ManorLords";
import Loja from "../pages/Loja";
import CadastroJogos from "../pages/Cadastrojogos";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/Loja" element={<Loja />} />
          <Route exact path="/CadastroJogos" element={<CadastroJogos />} />
          <Route exact path="/perfil" element={<Private Item={Perfil} />} />
          <Route exact path="/Raft" element={<Private Item={Raft} />} />
          <Route exact path="/Borderlands3" element={<Private Item={Borderlands3} />} />
          <Route exact path="/ManorLords" element={<Private Item={ManorLords} />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
