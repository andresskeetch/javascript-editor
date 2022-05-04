import type { NextPage } from "next";
import MainEditor from "../../modules/editor/components/editor/editor";
import HeadEditor from "../../modules/editor/components/head/head";
import Title from "../../modules/editor/components/title/title";

import styles from "./styles.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadEditor />
      <Title>JS RUNNER ONLINE</Title>
      <MainEditor />
    </div>
  );
};

export default Home;
