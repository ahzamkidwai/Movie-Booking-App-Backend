const Theatre = require('../models/theatre.model');

const createNewTheatre = async (data) => {
    try {
        const theatre = await Theatre.create(data);
        return theatre;
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

const fetchTheatres = async () => {
    const theatres = await Theatre.find();
    console.log("All Theatres are : ", theatres);
    return theatres;
}

const deleteTheatreById = async (id) => { 
    try {
        const response = await Theatre.findByIdAndDelete(id);
        if (!response) {
            return {
                err: "No record with this ID found. Cannot delete this.",
                code: 404
            }
        }
        return response;
    } catch (error) {
        return { err: error.message, code: 400 }
    }
}

const fetchTheatreById = async (id) => {
    const theatre = await Theatre.findById(id);
    if (!theatre) {
        return {
            message : "No such theatre exists",
            code : 404
        }
    }
    return theatre;
}

module.exports = { createNewTheatre, fetchTheatres, deleteTheatreById, fetchTheatreById }