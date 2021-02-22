import React from "react";
import kodluyoruzIcon from "../../assets//kodluyoruz-icon.png";
import { StyledHeader } from "./styles";
import { Link } from "react-router-dom";
import NavigationBottom from "../NavigationBottom";

const Navigation = () => {
  const menuLinks = [
    { id: 1, to: "/", title: "Anasayfa" },
    { id: 2, to: "/hakkimizda", title: "Hakkimizda" },
    { id: 3, to: "/profil", title: "Profil" },
  ];
  return (
    <StyledHeader className="navigation">
      {/* Navigation Top Area */}
      <div className="navigation__top">
        <div className="copy">
          <span className="copy__icon">
            <img src={kodluyoruzIcon} alt="" />
          </span>
          <span className="copy__link">
            <a href="https://www.kodluyoruz.org/">Kodluyoruz</a>
          </span>
        </div>
        <ul className="links">
          {menuLinks.map(({ id, to, title }) => (
            <li key={id}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Navigation Bottom Area */}
      <NavigationBottom />
    </StyledHeader>
  );
};

export default Navigation;
