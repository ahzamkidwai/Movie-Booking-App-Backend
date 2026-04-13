const mongoose = require("mongoose");

const connectMongoDB = async () => {
    const MONGO_URI = process.env.MONGODB_URI;

    console.log("MONGO URI:", MONGO_URI);

    try {
        console.log("🔄 Connecting with DB...");

        const connection = await mongoose.connect(MONGO_URI);

        // Check connection state
        const state = connection.connection.readyState;

        if (state === 1) {
            console.log("MongoDB Connection Successful");
            // console.log("Host:", connection.connection.host);
            // console.log("DB Name:", connection.connection.name);
        } else {
            console.log("MongoDB Not Connected. State:", state);
        }

    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;