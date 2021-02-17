import React from "react";
import LogoIMG from "../../assets/logo.png";
import { StyledDıv } from "./style";

const Logo = () => {
  return (
    <StyledDıv>
      <img src={`${LogoIMG}`} alt="Türk Dil Kurumu Sözlük" />
    </StyledDıv>
  );
};

export default Logo;
