import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSection>
      <h1>Profile</h1>
    </StyledSection>
  );
};

export default Profile;
