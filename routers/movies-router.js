const express = require('express')
const moviesRouter = express.Router()

moviesRouter.get('/', getMovies) // Get all movies
moviesRouter.get('/:id', getById) // Get specific movie
moviesRouter.post('/', createMovie) // Create a new movie
moviesRouter.put('/', upsertMovie) // Update or Create a movie
moviesRouter.patch('/:id', modifyMovie) // Update specific movie
moviesRouter.delete('/:id', deleteMovie) // Delete specific movie

module.exports = moviesRouter
