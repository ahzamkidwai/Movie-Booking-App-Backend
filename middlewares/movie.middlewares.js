const badRequestResponse = {
    success: false,
    error: "",
    data: {},
    message: "Malformed Request | Bad Request"
}

const validateMovieCreateRequest = async (req, res, next) => {
    if (!req.body.name || req.body.name.trim().length < 2) {
        badRequestResponse.error = "Movie name is required and should be at least 2 characters long";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.description || req.body.description.trim().length === 0) {
        badRequestResponse.error = "Movie description is required";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.casts || !Array.isArray(req.body.casts) || req.body.casts.length === 0) {
        badRequestResponse.error = "Casts must be a non-empty array";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.trailerUrl) {
        badRequestResponse.error = "Trailer URL is required";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.language) {
        badRequestResponse.error = "Language is required";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.releaseDate) {
        badRequestResponse.error = "Release date is required";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.director) {
        badRequestResponse.error = "Director name is required";
        return res.status(400).json(badRequestResponse);
    }

    if (!req.body.releaseStatus) {
        badRequestResponse.error = "Release status is required";
        return res.status(400).json(badRequestResponse);
    }

    next();
}

module.exports = { validateMovieCreateRequest };