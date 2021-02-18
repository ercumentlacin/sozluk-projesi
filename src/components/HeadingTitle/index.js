import React from "react";
import { StyledHeadingTitle } from "./style";

const HeadingTitle = ({ title }) => {
  return <StyledHeadingTitle>{title ? title : null}</StyledHeadingTitle>;
};

export default HeadingTitle;
