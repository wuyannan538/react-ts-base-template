import React from "react";
import styles from "./style.module.css";

interface IProps {
  compiler: string;
  framework: string;
}

const Hello: React.FC<IProps> = (props) => (
  <h1 className={styles.box}>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export default Hello;
