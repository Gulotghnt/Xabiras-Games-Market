import React from "react";
import * as C from "./styles";

const button2 = ({ Text, onClick, Type = "button", backgroundImage }) => {
  return (
    <C.button2 type={Type} onClick={onClick} backgroundImage={backgroundImage}>
      {Text}
    </C.button2>
  );
};

export default button2;
