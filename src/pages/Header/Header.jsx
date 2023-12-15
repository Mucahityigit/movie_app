import React, { useState } from "react";
import NavListItem from "../../components/NavListItem/NavListItem";
import navListData from "../../data/navListData";
import "./header.css";
import { CiViewList, CiBookmark } from "react-icons/ci";
import { useSelector } from "react-redux";
import HeaderModal from "../../components/HeaderModal/HeaderModal";

const Header = ({ scroll }) => {
  const [listModal, setListModal] = useState(false);
  const [bookmarkModal, setBookmarkModal] = useState(false);
  const { bookmark, list } = useSelector((state) => state.listOperations);

  const handleListModal = () => {
    setListModal(!listModal);
    setBookmarkModal(false);
  };
  const handleBookmarkModal = () => {
    setBookmarkModal(!bookmarkModal);
    setListModal(false);
  };
  return (
    <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      {/* <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="sign in"
      /> */}
      <div className="favoriteList relative">
        <div className="list" onClick={handleListModal}>
          <CiViewList />
          <span>{list.length}</span>
        </div>
        <div className="bookmark" onClick={handleBookmarkModal}>
          <CiBookmark />
          <span>{bookmark.length}</span>
        </div>
        {listModal && (
          <HeaderModal
            modal="listModal"
            value={list}
            onClose={handleListModal}
          />
        )}
        {bookmarkModal && (
          <HeaderModal
            modal="bookmarkModal"
            value={bookmark}
            onClose={handleBookmarkModal}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
