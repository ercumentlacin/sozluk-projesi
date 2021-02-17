import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return <StyledSection>{theme}</StyledSection>;
};

export default Profile;
