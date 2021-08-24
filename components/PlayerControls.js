import React from "react";
import style from "../styles/player.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function PlayerControls(props) {
  return (
    <div className={style.playercontrols}>
      <AudioPlayer
        // autoPlay
        src={props.song}
        // onPlay={(e) => console.log("onPlay")}
        // other props here
        showSkipControls
        autoPlayAfterSrcChange
        
      />
    </div>
  );
}

export default PlayerControls;
