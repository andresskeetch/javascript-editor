import type { NextPage } from "next";
import { MainEditor, HeadEditor } from "./components";
import { Title } from "./components/title/title";
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
