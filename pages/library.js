import React from "react";
import Head from "next/dist/shared/lib/head";
import Upload from "../components/Upload"
import style from "../styles/library.module.css"
const library = () => {
  return (
    <>
      <head>
        <title>library</title>
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </head>
    <div>
      <h1 className={style.h}>Upload Music here:</h1>
      <Upload/>
      </div>
      </>
  );
};

export default library;
