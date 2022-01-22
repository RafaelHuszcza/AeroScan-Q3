import React from "react";

import Logo from "../../assets/Logo.png";
import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img id="logo" src={Logo} alt="Logo Aero Scan" />
      </div>
      <div className="header-title">
      Teste de Nivelamento para Desenvolvimento Web (Frontend)
      </div>
    </div>
  );
};

export default Header;
