import React, { useEffect } from "react";
import "./button.css";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark, setBookmarkCount, setList, setListCount } from "../../redux/listOperationsSlice";
const Button = ({ icon, name, color = "#fff", bgColor = "var(--primary)",movieID }) => {
  const dispatch = useDispatch();
  const {bookmark,list} = useSelector(state=>state.listOperations)

  // useEffect(()=>{
  //   console.log(bookmark)
  //   console.log(list)

  // },[bookmark,list])
  
  const setListOperations = ()=>{
    if(!bookmark.includes(movieID)){
      if(name == "Book"){
        dispatch(setBookmarkCount())
        dispatch(setBookmark(movieID))
      }
    }
    if(!list.includes(movieID)){
      if(name == "my list"){
        dispatch(setListCount())
        dispatch(setList(movieID))
       }
    }
    
  }
  return (
    <a
      href="#"
      className="mainBtn"
      style={{ color: color, background: bgColor }}
      onClick={setListOperations}
    >
      {icon} {name}
    </a>
  );
};

export default Button;
