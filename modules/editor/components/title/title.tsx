import React from "react";
import styles from "./styles.module.css";

const Title: React.FC<{ children: string }> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
