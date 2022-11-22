import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import starImg from '../public/star.png';

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
            Kaem Films
          </h1>

          <input className={styles.input} type="text" placeholder="Wyszukaj film..." />
          <button className={styles.button1}>+ DODAJ FILM</button>

        </div>

        <div className={styles.container2}></div>

        <div className={styles.container3}>

          <Image className={styles.star} src={starImg} alt='/' />

          <div className={styles.row1}>
            <div className={styles.film}>
              <div className={styles.film1}>FILM</div>
              <div className={styles.film1title}>TYTUŁ FILMU</div>
            </div>
            <div className={styles.descbox}>
              <div className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className={styles.descdetails}>
                <div>Tłumaczenie:</div>
                <div>Rok produkcji:</div>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.row2}>
            <div className={styles.showcase1}>
              <div className={styles.show1}>SHOWCASE 1</div>
              <div className={styles.show1info}>
                <div>TYTUŁ</div>
                <div>ROK</div>
              </div>
            </div>

            <div className={styles.showcase2}>
              <div className={styles.show2}>SHOWCASE 2</div>
              <div className={styles.show2info}>
                <div>TYTUŁ</div>
                <div>ROK</div>
              </div>
            </div>

            <div className={styles.showcase3}>
              <div className={styles.show3}>SHOWCASE 3</div>
              <div className={styles.show3info}>
                <div>TYTUŁ</div>
                <div>ROK</div>
              </div>
            </div>

          </div>

        </div>

      </main >
    </div >

    /*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>*/
  );
}
