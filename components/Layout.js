import React from "react";
import Nav from "./Nav";
import style from "../styles/layout.module.css";

const Layout = ({children}) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h3>Music Streaming</h3>
        <Nav/>
          </div>
          {children}
      <div className={style.footer}>
        <h3>Browse and listen to music of your choice</h3>
      </div>
    </div>
  );
};

export default Layout;
