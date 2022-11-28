import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/add.module.css';
import Link from 'next/link';
import starImg from '../public/assets/icons/star.png';
import Form from '../components/Form';

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
                        <Image src='/assets/icons/movie.svg' width={44} height={44} alt='/' />
                        <Link href='/'>Kaem Films</Link>
                    </h1>

                    {/* <input className={styles.input} type="text" placeholder="Wyszukaj film..." /> */}
                    <div></div>

                </div>

                <div className={styles.container2}></div>

                <div className={styles.container3}>

                    <div className={styles.star}>
                        <Image src={starImg} width={498} height={498} alt='/' />
                    </div>

                </div>

                <h1 className={styles.dodaj}>Dodaj nowy film</h1>
                    <Form />
            </main>
        </div>

    );
}
