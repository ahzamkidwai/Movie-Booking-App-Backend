const  { errorResponseBody } = require("../utils/responseBody");

const validateTheatreCreateRequest = async (req, res, next) => {
    if(!req.body.name || req.body.name.trim().length < 7) {
        errorResponseBody.message = "Theatre name is required and should be at least 6 characters long";
    }

    else if(!req.body.city || req.body.city.trim().length === 0) {
        errorResponseBody.message = "Theatre city name is required";
    }

    else if(!req.body.pinCode || req.body.pinCode.length !== 6) {
        errorResponseBody.message = "Theatre Pincode is required & should be of 6 digits";
    }

    return res.status(400).json(errorResponseBody);
    next();
}

module.exports = { validateTheatreCreateRequest };