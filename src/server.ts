import http from 'http';
import express from 'express';
import {applyMiddleware, applyRoutes} from './util';
import middleware from './middleware';
import errorHandlers from "./middleware/errorHandlers";
import routes from './services'

import bodyParser from "body-parser";

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});


var router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { port = 3000 } = process.env;
const server = http.createServer(router);

server.listen(port, () => {
    console.log('Server is running http://localhost:${PORT}...'+ port);
});


// Controllers (route handlers)
import * as homeController from "./mvc/controller/home";

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.get('/', homeController.index);
router.get('/users', homeController.users);
router.post('/users/create', homeController.create);