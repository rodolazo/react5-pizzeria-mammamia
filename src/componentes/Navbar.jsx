import React from "react";
import headerHouse from "../assets/house.png";
import headerLogin from "../assets/login.png";
import headerLogout from "../assets/logout.png";
import headerProfile from "../assets/user.png";
import headerTotal from "../assets/shopping-cart2.png";
import headerRegister from "../assets/register.png";

const Navbar = () => {
  // Variables para saber cómo se mostrará la barra de navegación
  const total = 25000; // Simulación del total de la compra
  const token = false; // Simulación de estado de autenticación

  return (
    <>
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item navbar__item_logo">
            ¡Pizzería Mamma Mía!
          </li>
          <li className="navbar__item navbar__item_link">
            <img className="navbar__icon" src={headerHouse}></img> Home
          </li>
          <li
            className={`navbar__item navbar__item_link ${
              token ? "activo" : "inactivo"
            }`}
          >
            <img className="navbar__icon" src={headerProfile}></img> Profile
          </li>
          <li
            className={`navbar__item navbar__item_link ${
              token ? "activo" : "inactivo"
            }`}
          >
            <img className="navbar__icon" src={headerLogout}></img> Logout
          </li>
          <li
            className={`navbar__item navbar__item_link ${
              token ? "inactivo" : "activo"
            }`}
          >
            <img className="navbar__icon" src={headerLogin}></img> Login
          </li>
          <li
            className={`navbar__item navbar__item_link ${
              token ? "inactivo" : "activo"
            }`}
          >
            <img className="navbar__icon" src={headerRegister}></img> Register
          </li>
          <li className="navbar__item navbar__item_last">
            <img className="navbar__icon" src={headerTotal}></img>
            {`Total: $ ${total.toLocaleString("es-ES")}`}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
