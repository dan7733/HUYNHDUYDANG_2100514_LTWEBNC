import express from 'express'
import { default as date } from '../date'; 
import getURL_ES6 from '../getURL_ES6';
import aboutPage from '../controller/AboutController'
import getHomePage from '../controller/HomeController'
import getContact from '../controller/ContactController'
import { getAllUser } from '../controller/UserController'; 
import { viewUser } from '../controller/UserController'; 
import { deleteUser } from '../controller/UserController'; 
import { editUser } from '../controller/UserController'; 
import { updateUser } from '../controller/UserController'; 
import { createUser } from '../controller/UserController'; 
import { insertUser } from '../controller/UserController'; 
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage);  // Gọi controller xử lý route
    router.get('/contact', getContact);  
    router.get('/getuser', getAllUser); 
    router.get('/deltauser/:id', viewUser); 
    router.post('/deleteuser/', deleteUser) 
    router.get('/edituser/:id', editUser); 
    router.post('/edituser/', updateUser) 
    router.get('/createnewuser/', createUser);
    router.post('/createnewuser/', insertUser) 
    router.get('/date', (req, res) => {
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' });
        res.send(`${date()}`);
    });
    router.get('/geturl', (req, res) => {
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' });
        res.write(`${getURL_ES6.getPath(req)}<br/>`);
        res.write(`${getURL_ES6.getParamesURL(req)}<br/>`);
    });

    return app.use('/', router)
}
export default initWebRoute


