import Head from "next/head";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JS RUNNER ONLINE</title>
        <meta name="description" content="Ejecuta tu codigo JS" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>JS RUNNER</h1>
        <p className={styles.description}>
          Prueba todas las APIs de javascript
        </p>
        <Link href={"/editor"}>
          <button className={styles.button}>Ir a Editor</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
