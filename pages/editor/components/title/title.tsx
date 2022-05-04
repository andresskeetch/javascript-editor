import React from "react";
import styles from "./styles.module.css";

export const Title: React.FC<{ children: string }> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
