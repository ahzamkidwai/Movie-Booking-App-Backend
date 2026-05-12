const { response } = require("express");
const Movie = require("../models/movie.model.js")
const movieService = require("../services/movie.service.js");
const { errorResponseBody, successResponseBody } = require("../utils/responseBody.js");

const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        if (movie.err) {
            errorResponseBody.err = movie.err;
            errorResponseBody.code = movie.code;
            errorResponseBody.message = "Validation Failed on few parameters of the request body"
            return res.status(movie.code).json(errorResponseBody)
        }
        successResponseBody.message = "Successfully created a new movie";
        successResponseBody.data = movie;
        return res.status(201).json(successResponseBody)
    } catch (error) {
        console.log("Error occurred while create a movie : ", error)
        errorResponseBody.message = error.message;
        return res.status(500).json(errorResponseBody)
    }
}

const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id);
        successResponseBody.message = "Successfully deleted the movie";
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody)
    } catch (error) {
        console.log("Error occurred while deleting the movie : ", error);
        errorResponseBody.message = error.message;
        return res.status(500).json(errorResponseBody)
    }
}

const getMovie = async (req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);
        if (response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody)
    } catch (error) {
        console.log("Error occurred while fetching the movie : ", error);
        errorResponseBody.message = error.message;
        return res.status(500).json(errorResponseBody)
    }
}

const updateMovie = async (req, res) => {
    try {
        const response = await movieService.updateMovie(req.params.id, req.body);
        console.log("Response in update movie : ", response)
        if (response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "The updates that we are trying to apply doesn't validate the schema"
            return res.status(response.code).json(errorResponseBody)
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.log("Error occurred while updating movie: ", error);
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

const getMovies = async (req, res) => {
    try {
        const response = await movieService.fetchMovies(req.query)
        if (response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody)
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody)
    } catch (error) {
        console.log("Error occurred while fetching movies by query: ", error);
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody)
    }
}

module.exports = { createMovie, deleteMovie, getMovie, updateMovie, getMovies }