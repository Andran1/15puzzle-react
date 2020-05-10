import React from "react";
import "./tile-style.css";

const TileStyle = (props) => {
    console.log(props);
  const { num } = props;
 
  let classes;
  if (num === null) {
    classes = "inactive";
  } else {
    classes = "active";
  }
  return (
    <div className={classes}>{num}</div>
  );
};



export default TileStyle;
