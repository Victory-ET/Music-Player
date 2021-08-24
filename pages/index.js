import Head from "next/head";
import Player from "../components/Player"
import Search from "../components/Search"
import { useState } from "react";
import style from "../styles/arrangement.module.css"

export default function Home(props) {
  const [a, b] = useState(null)
  const [song, newsong] = useState(null)
  const [image, newimage] = useState(null)
  
  const pull_data = (data) => {
    b(data);
  }
  const pull_song = (data) => {
    newsong(data);
  }
  const pull_img = (data) => {
    newimage(data);
  }


  
  return (
    <>
      <head>
        <title>Music Application</title>
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </head>
      <div className={style.maincont}>
        <Search  func={pull_data} song={pull_song} image={pull_img}/>
        <Player title={a} play={song} image={image}/>
      </div>
    </>
  );
}
