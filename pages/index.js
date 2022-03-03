import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quisquam corporis vero ex nostrum tempore possimus perspiciatis cum,
          voluptatibus molestiae consequatur quos eveniet earum non culpa.
          Inventore adipisci odio non.
        </p>
        <p className={styles.text}>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quisquam corporis vero ex nostrum tempore possimus perspiciatis cum,
          voluptatibus molestiae consequatur quos eveniet earum non culpa.
          Inventore adipisci odio non.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>Ninja Listings</a>
        </Link>
      </div>
    </>
  );
}
