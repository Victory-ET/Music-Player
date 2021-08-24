import React from "react";
import style from "../styles/player.module.css";

function PlayerDetails(props) {

  return (
    <div className={style.playerdetails}>
      <div className={style.detailsimg}>
        <img src={props.image} alt=""></img>
      </div>
      <h3 className={style.detailstitle}>{props.title}</h3>
    </div>
  );
}

export default PlayerDetails;
