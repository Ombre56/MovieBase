import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Movie from '../components/Movie';
import Movies from '../components/Movies';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieBase</title>
        <meta name="description" content="MovieBase by Kaem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.title}>
          <h1 className={styles.logo}>
            <Image src='/assets/icons/movie.svg' width={44} height={44} alt='/' />
            <Link href='/'>Kaem Films</Link>
          </h1>

          {/* <input className={styles.input} type="text" placeholder="Wyszukaj film..." /> */}

          <div className={styles.button1}>
            <Link href="/add">+ DODAJ FILM</Link>
          </div>

        </div>

        <div className={styles.container2}></div>

        <section className={styles.container3}>

          <div className={styles.row1}>
            <Movie />
          </div>

          <div className={styles.divider}></div>

          <ul className={styles.row2}>
            <Movies />
          </ul>
        </section>
      </main >
    </div >
  );
}
