import React from "react";
import styles from "./styles";

const Code = () => {
  const classes = styles();
  return (
    <div className={classes.board}>
      <Code className={classes.whiteText}>{"> $ npm install "}</Code>
      <br />
      <Code className={classes.greenText}>{"// Everything installed!"}</Code>
      <br />
      <br />
      <Code className={classes.whiteText}>{"> $ npm start "}</Code>
      <br />
      <Code className={classes.greenText}>
        {"// LiveReload started. Opening localhost:3000"}
      </Code>
      <br />
    </div>
  );
};

export default Code;
