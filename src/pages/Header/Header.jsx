import React from "react";
import NavListItem from "../../components/NavListItem/NavListItem";
import navListData from "../../data/navListData";
import "./header.css";
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import { CiViewList,CiBookmark  } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = ({ scroll }) => {
  const {bookmarkCount,listCount} = useSelector(state=>state.listOperations)
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
      <Search />
      {/* <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="sign in"
      /> */}
      <div className="favoriteList">
        <div className="list">
          <CiViewList />
          <span>{bookmarkCount}</span>
        </div>
        <div className="bookmark">
          <CiBookmark />
          <span>{listCount}</span>
        </div>
      </div>
      <div>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
          </div>
          <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>
                </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
