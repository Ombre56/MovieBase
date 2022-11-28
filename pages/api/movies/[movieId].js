import { movies } from "../../../data/movies";

export default function handler(req, res) {
  const { movieId } = req.query;
  try {
    if (req.method === 'GET') {
      const movie = movies.find(
        (movie) => movie.id === parseInt(movieId)
      )
      res.status(200).json(movie)
    } else if (req.method === 'DELETE') {
      const deleteMovie = movies.find(
        (movie) => movie.id === parseInt(movieId)
      )

      const index = movies.findIndex(
        (movie) => movie.id === parseInt(movieId)
      )
      movies.splice(index, 1)

      res.status(200).json(deleteMovie)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}