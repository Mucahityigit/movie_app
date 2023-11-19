import React from "react";
import NavListItem from "../../components/NavListItem/NavListItem";
import navListData from "../../data/navListData";
import "./header.css";
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="sign in"
      />
    </header>
  );
};

export default Header;
