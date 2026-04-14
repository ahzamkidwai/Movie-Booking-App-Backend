const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectMongoDB = require('./config/db.js');
const Movie = require('./models/movie.model.js');
const MovieRoutes = require("./routes/movie.routes.js")

dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send("Welcome to Home Page")

})

MovieRoutes(app);

app.get("/home", (req, res) => {
    return res.json({
        success: true,
        message: "Welcome to Home Page"
    })
})

app.listen(PORT, async () => {
    console.log("Listening to port : ", PORT)
    connectMongoDB();
    // await Movie.create({
    //     "name": "Dangal",
    //     "description": "A former wrestler trains his daughters to become world-class wrestlers.",
    //     "casts": ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
    //     "trailerUrl": "https://www.youtube.com/watch?v=x_7YlGv9u1g",
    //     "language": "Hindi",
    //     "releaseDate": "2016-12-23",
    //     "director": "Nitesh Tiwari",
    //     "releaseStatus": "RELEASED"
    // })
})