import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>pratinidhi</title>
        <meta name="description" content="pratinidhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>{"Get started by adding URL as query parameter like this ->"}</p>
          <a
            href={
              "https://pratinidhi.aashutosh.dev/api/proxy?url=git.aashutosh.dev"
            }
          >
            https://pratinidhi.aashutosh.dev/api/proxy?url=git.aashutosh.dev
          </a>
        </div>
      </main>
    </>
  );
}
