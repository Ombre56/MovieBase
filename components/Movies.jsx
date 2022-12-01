import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css';

export default function Movies() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const fetchMovies = () => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    fetchMovies();
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const deleteMovie = async(movieId) => {
    const res = await fetch(`/api/movies/${movieId}`, {
      method: 'DELETE'
    })
    const data = await res.json();
    console.log(data)

    fetchMovies();
  }

  return (
    <>
      {Object.values(data).map((movie) => {
        return (
          <li key={movie.id} className={styles.showcase}>
            <Link href={`/movie/${movie.id}`}>
              <div className={styles.show}>
                <Image
                  src={movie.thumbnail}
                  width='320'
                  height='170'
                  layout='responsive'
                  alt='The Witcher'
                />
              </div>
            </Link>
              <div className={styles.showInfo}>
                <div>{movie.title}</div>
                <div>{movie.date_year}</div>
              </div>
            <button className={styles.delete} onClick={() => deleteMovie(movie.id)}>Usuń</button>
          </li>
        )
      })
      }
    </>
  )
}