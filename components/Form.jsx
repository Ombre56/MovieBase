import React, { useState } from 'react'
import styles from '../styles/add.module.css';
import Link from 'next/link';

function Form() {
  const [data, setData] = useState(null)
  const [movie, setMovie] = useState({
    id: '',
    title: '',
    description: '',
    date_year:'',
    translation: '',
    thumbnail:'',
  });

  const imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
              setMovie({ ...movie, thumbnail: reader.result })
      }
      reader.readAsDataURL(e.target.files[0]);
  }

  const fetchMovies = () => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }


  const addNewMovie = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/movies', {
      method: 'POST',
      body: JSON.stringify({ movie }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)

    fetchMovies();
    setMovie({
      id: '',
      title: '',
      description: '',
      date_year: '',
      translation: '',
      thumbnail: '',
    });
  }
  return (
    <>
      <form onSubmit={addNewMovie} method='POST'>
        <div className={styles.container4}>
          <h2 className={styles.tytuł}>Tytuł</h2>
          <input
            className={styles.input}
            type="text"
            name='title'
            id='title'
            maxLength={16}
            value={movie.title}
            onChange={(e) => setMovie({...movie, title: e.target.value})}
            placeholder="Wpisz tytuł filmu..."
          />
        </div>

        <div className={styles.container7}>
          <h2 className={styles.tytuł}>Opis</h2>
          <textarea
            className={styles.textarea}
            style={{ resize: "none" }}
            rows="15"
            name='description'
            id='description'
            cols="80"
            placeholder="Wpisz tutaj opis filmu..."
            value={movie.description}
            onChange={(e) => setMovie({...movie, description: e.target.value})}
          />
        </div>

        <div className={styles.container5}>
          <h2 className={styles.rok}>Rok produkcji</h2>
          <input
            className={styles.input}
            type="number"
            name='date_year'
            id='date_year'
            placeholder="Wpisz rok produkcji..."
            value={movie.date_year}
            onChange={(e) => setMovie({...movie, date_year: e.target.value})}
          />
        </div>

        <div className={styles.container6}>
          <h2 className={styles.tłumaczenie}>Tłumaczenie</h2>
            <select className={styles.select} onChange={(e) => setMovie({...movie, translation: e.target.value})}>
                <option defaultValue='Dubbing'>Dubbing</option>
                <option value='Lektor'>Lektor</option>
                <option value='Napisy'>Napisy</option>
            </select>
        </div>

        <div className={styles.container8}>
          <h2 className={styles.rok}>Obrazek</h2>
          <input
            type="file"
            id='thumbnail'
            name="thumbnail"
            accept='image/png, image/jpeg'
            max-size="20"
            className='add-article-image'
            onChange={imageHandler}
          />
        </div>

        <button className={styles.button2}>
            + DODAJ FILM
        </button>
    </form>
  </>
  )
}

export default Form