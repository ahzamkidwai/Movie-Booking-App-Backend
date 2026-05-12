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

module.exports = { createNewTheatre, fetchTheatres }