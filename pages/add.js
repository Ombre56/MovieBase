import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/add.module.css';
import Link from 'next/link';
import starImg from '../public/star.png';

export default function add() {
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
                        <Link href='/'>Kaem Films</Link>
                    </h1>

                    <input className={styles.input} type="text" placeholder="Wyszukaj film..." />
                    <div></div>

                </div>

                <div className={styles.container2}></div>

                <div className={styles.container3}>

                    <Image className={styles.star} src={starImg} alt='/' />

                </div>

                <h1 className={styles.dodaj}>Dodaj nowy film</h1>

                <div className={styles.container4}>

                    <h2 className={styles.tytuł}>Tytuł</h2>

                    <input className={styles.input} type="text" placeholder="Wpisz tytuł filmu..." />

                </div>

                <div className={styles.container5}>

                    <h2 className={styles.rok}>Rok produkcji</h2>

                    <input className={styles.input} type="text" placeholder="Wpisz rok produkcji..." />

                </div>

                <div className={styles.container6}>

                    <h2 className={styles.tłumaczenie}>Tłumaczenie</h2>

                    <select className={styles.select}>
                        <option>Dubbing</option>
                        <option>Lektor</option>
                        <option>Napisy</option>
                    </select>
                </div>

                <Link href="/" className={styles.button2}>+ DODAJ FILM</Link>
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
