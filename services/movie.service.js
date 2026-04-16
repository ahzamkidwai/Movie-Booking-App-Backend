const Movie = require("../models/movie.model")

const createMovie = async (data) => {
    try {
        const movie = await Movie.create(data);
        return movie;
    } catch (error) {
        if (error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });
            console.log("Error in creating Movie : ", err);
            return { err: err, code: 422 }
        }
    }
}

const deleteMovie = async (id) => {
    const response = await Movie.findByIdAndDelete(id)
    return response;
}

const getMovieById = async (id) => {
    const movie = await Movie.findById(id);
    console.log("Movie inside movie.services : ", movie)
    if (!movie) {
        return {
            err: "No Movie found for the corresponding id provided",
            code: 404,
        }
    }
    return movie;
}

const updateMovie = async (id, data) => {
    try {
        const movie = await Movie.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        return movie;
    } catch (error) {
        console.log("Error inside update Movie services : ", error)
        if (error.name.includes('ValidationError') || error._message === 'Validation Failed') {
            console.log("Hello Ji Ji Ji")
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });
            console.log("Error in creating Movie : ", err);
            return { err: err, code: 422 }
        }
    }
}

const fetchMovies = async (filter) => {
    let query = {};
    if (filter.name) {
        query.name = filter.name;
    }
    let movies = await Movie.find({
        name: { $regex: query.name, $options: "i" }
    });
    if (!movies) {
        return {
            err: "Not able to find the queries movies.",
            code: 404
        }
    }
    return movies;
}

module.exports = { createMovie, deleteMovie, getMovieById, updateMovie, fetchMovies }