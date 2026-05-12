const mongoose = require('mongoose');

/**
* Define the schema of the theatre resource to be stored in the DB.
*/

const theatreSchema = new mongoose.Schema({
    name: {
        type: String, required: true, minLength: 6
    },
    description: {
        type: String
    },
    city: {
        type: String, required: true
    },
    pinCode: {
        type: Number, required: true, minLength: 6, maxLength: 6
    }, 
    address: {
        type: String
    }
}, { timestamps: true });

const Theatre = mongoose.model("Theatre", theatreSchema);
module.exports = Theatre;