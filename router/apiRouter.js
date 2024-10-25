import express from 'express';
import aboutPage from '../controller/AboutController'
import getHomePage from '../controller/HomeController'
import getContact from '../controller/ContactController'
import ApiUserController from '../controller/ApiUserController.js';
import { sessionMiddleware, getLoginPage, loginUser, getLogoutPage, authMiddleware, adminMiddleware, userMiddleware } from '../controller/authMiddlewareController';
const router = express.Router();

const initAPIRoute = (app) => {
    // Định nghĩa các route (đường dẫn) cho API
    router.get('/', getHomePage)
    router.get('/about', aboutPage);  // Gọi controller xử lý route
    router.get('/contact', getContact);
    router.get('/getuser', authMiddleware, ApiUserController.getAllUsers);
    router.get('/deltauser/:id', authMiddleware, userMiddleware, ApiUserController.detailUser);
    router.post('/deleteuser/', authMiddleware, userMiddleware, ApiUserController.deleteUser)
    router.post('/edituser/', authMiddleware, userMiddleware, ApiUserController.updateUser)
    router.post('/createnewuser/', authMiddleware, adminMiddleware, ApiUserController.insertUser)
    router.post('/login', ApiUserController.loginUser)
    router.get('/logout', ApiUserController.logoutUser)
    // Gắn router vào ứng dụng Express
    return app.use('/api/v1', router);
};

export default initAPIRoute;