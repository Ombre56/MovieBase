import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css';
import starImg from '../../public/assets/icons/star.png';

function SingleMovie({ movie }) {
  return (
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
          <div className={styles.star}>
            <Image src={starImg} width={498} height={498} alt='/' />
          </div>
          <div className={styles.film}>
            <div className={styles.film1}>
            <Image
              src={movie.thumbnail}
              width='960'
              height='540'
              layout='responsive'
              alt='The Witcher'
            />
          </div>
          </div>

          <div className={styles.descbox}>
            <div className={styles.film1title}>{movie.title}</div>
            <div className={styles.descdetails}>
              <div>Tłumaczenie: <b>{movie.translation}</b></div>
              <div>Rok produkcji: <b>{movie.date_year}</b></div>
            </div>
              </div>
          </div>

        <div className={styles.divider}></div>
        
          <div className={styles.desc2}>
              {movie.description}
            </div>
        </section>
      </main >
  )
}

export default SingleMovie

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/movies/')
  const movie = await res.json()

  const paths = movie.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/movies/${params.movieId}`)
  const movie = await res.json()

  return { props: { movie } }
}
