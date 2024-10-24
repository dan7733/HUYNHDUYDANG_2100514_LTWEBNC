import express from 'express';
import aboutPage from '../controller/AboutController'
import getHomePage from '../controller/HomeController'
import getContact from '../controller/ContactController'
import ApiUserController from '../controller/ApiUserController.js';

const router = express.Router();

const initAPIRoute = (app) => {
    // Định nghĩa các route (đường dẫn) cho API
    router.get('/', getHomePage)
    router.get('/about', aboutPage);  // Gọi controller xử lý route
    router.get('/contact', getContact);
    router.get('/getuser', ApiUserController.getAllUsers);
    router.get('/deltauser/:id', ApiUserController.detailUser);

    // Gắn router vào ứng dụng Express
    return app.use('/', router);
};

export default initAPIRoute;