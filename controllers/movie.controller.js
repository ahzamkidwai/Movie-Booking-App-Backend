const Movie = require("../models/movie.model.js")

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return res.status(201).json({
            success: true,
            error: {},
            data: movie,
            message: "Successfully created a new movie"
        })
    } catch (error) {
        console.log("Error occurred while create a movie : ", error)
        return res.status(500).json({
            success: false,
            error: error,
            data: {},
            message: error.message
        })
    }
}

module.exports = { createMovie }