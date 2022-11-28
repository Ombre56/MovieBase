import React from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import starImg from '../public/assets/icons/star.png';

const welcomeMovie = {
    "id": 1,
    "title": "The Witcher",
    "description": "Wiedźmin to epicka opowieść na podstawie kultowej sagi fantasy Andrzeja Sapkowskiego. Geralt z Rivii, samotny zabójca potworów, usiłuje odnaleźć się w świecie, w którym ludzie bywają gorsi niż bestie, na które poluje. Przeznaczenie splata jego losy z potężną czarodziejką i skrywającą groźną tajemnicę młodą księżniczką. Razem muszą stawić czoła licznym zagrożeniom na pogrążającym się w chaosie Kontynencie.",
    "date_year": "2019",
    "translation": "Lektor",
    "thumbnail": "/assets/images/Witcher-thumbnail.png",
  };


function Movie() {
  return (
    <>
      <div className={styles.star}>
        <Image src={starImg} width={498} height={498} alt='/' />
      </div>

      <div className={styles.film}>
        <div className={styles.film1}>
         <Image
           src={welcomeMovie.thumbnail}
           width='960'
           height='540'
           layout='responsive'
           alt='The Witcher'
         />
       </div>
       <div className={styles.film1title}>{welcomeMovie.title}</div>
      </div>

     <div className={styles.descbox}>
       <div className={styles.desc}>
         {welcomeMovie.description}
       </div>
       <div className={styles.descdetails}>
         <div>Tłumaczenie: <b>{welcomeMovie.translation}</b></div>
         <div>Rok produkcji: <b>{welcomeMovie.date_year}</b></div>
       </div>
      </div>
    </>
  )
}

export default Movie