import { movies } from "../../../data/movies";

export default function handler(req, res) {
  try {
    if (req.method === 'GET') {
      res.status(200).json(movies);
    } else if (req.method === 'POST') {
      const movie = req.body.movie;
      const newMovie = {
        id: Math.round(Math.random(movie.id)*(30-4)+4),
        title: movie.title,
        description: movie.description,
        date_year: movie.date_year,
        translation: movie.translation,
        thumbnail: movie.thumbnail,
      }
      movies.push(newMovie)
      res.status(201).json(newMovie)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}