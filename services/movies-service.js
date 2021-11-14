const INITIAL_MOVIES = require('./movies.json')

let allMovies = []
let currentIndex = 0

function getAllMovies() {
  return [...allMovies]
}

function getById(id) {
  return getAllMovies().find((movie) => movie.id === id)
}

function getByTitle(title) {
  return getAllMovies().find((movie) => movie.title === title)
}

function createMovie({ title, img, synopsis, rating, year }) {
  const newMovie = {
    id: getNextIndex(),
    title,
    img,
    synopsis,
    rating,
    year,
  }

  allMovies = [...allMovies, newMovie]
  return newMovie
}

function deleteMovie(id) {
  const movie = getById(id)
  if (movie) {
    const movieIndex = allMovies.indexOf(movie)
    const newAllMovies = [...allMovies]
    newAllMovies.splice(movieIndex, 1)
    allMovies = newAllMovies
  }

  return movie
}

function init() {
  allMovies = [...INITIAL_MOVIES.movies]
  currentIndex = allMovies[allMovies.length - 1].id
}

function getNextIndex() {
  return ++currentIndex
}

init()

module.exports = { getAllMovies, getById, getByTitle, createMovie, deleteMovie, init }
