const theatreService = require('../services/theatre.service.js');
const { successResponseBody, errorResponseBody} = require("../utils/responseBody");

const createTheatre = async (req, res) => {
    try {
        const response = await theatreService.createNewTheatre(req.body);
        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.code = response.code;
            return res.status(response.code).json(errorResponseBody)
        }
        successResponseBody.data = response;
        successResponseBody.message = 'Successfully created the theatre';
        return res.status(201).json(successResponseBody);
    } catch (error) {
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody)
    }
}

const getTheatres = async (req, res) => {
    try {
        const response = await theatreService.fetchTheatres();
        successResponseBody.data = response;
        successResponseBody.message = 'Successfully fetched the theatre';
        return res.status(201).json(successResponseBody);
    } catch (error) { 
        console.log("Error occurred while fetching all theatres : ", error)
        console.log("Error occurred : ", error.message)
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

const deleteTheatre = async (req, res) => {
    try {
        const response = await theatreService.deleteTheatreById(req.params.id);
        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.code = response.code;
            return res.status(response.code).json(errorResponseBody)
        }
        successResponseBody.data = response;
        successResponseBody.message = 'Successfully deleted the theatre';
        return res.status(201).json(successResponseBody);
    } catch (error) {
        console.log("Error occurred while deleting the theatre : ", error);
        errorResponseBody.message = error.message;
        return res.status(500).json(errorResponseBody)
    }
}

const getTheatreById = async (req, res) => {
    try {
        const response = await theatreService.fetchTheatreById(req.params.id);
        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.code = response.code;
            return res.status(response.code).json(errorResponseBody)
        }
        console.log("Response after fetching from getTheatreById : ", response)
        successResponseBody.data = response;
        successResponseBody.message = response.message || 'Successfully fetched the theatre ID';
        return res.status(201).json(successResponseBody);
    } catch (error) {
        console.log("Error occurred while fetching theatre by ID : ", error);
        errorResponseBody.message = error.message;
        return res.status(500).json(errorResponseBody)
    }
}

module.exports = { createTheatre, getTheatres, deleteTheatre, getTheatreById };