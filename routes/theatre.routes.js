const TheatreController = require('../controllers/theatre.controller.js');
const TheatreMiddleware = require('../middlewares/theatre.middleware.js');

const routes = (app) => {
    app.post("/mba/api/v1/theatres", TheatreMiddleware.validateTheatreCreateRequest, TheatreController.createTheatre)
    app.get("/mba/api/v1/theatres", TheatreController.getTheatres)
    app.get("/mba/api/v1/theatres/:id", TheatreController.getTheatreById)
    app.delete("/mba/api/v1/theatres/:id", TheatreController.deleteTheatre);
}

module.exports = routes;