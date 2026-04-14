const Movie = require("../models/movie.model")

const createMovie = async (data) => {
    try {
        const movie = await Movie.create(data);
        return movie;
    } catch (error) {
        if (error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.error[key].message;
            });
            console.log("Error in creating Movie : ", err);
            return {err: err, code: 422}
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
            // message:"Something went wrong, unable to fetch movie",
            // data:{}
        }
    }
    return movie;
}

module.exports = { createMovie, deleteMovie, getMovieById }