import express from 'express'
import dotenv from 'dotenv/config'
import { default as date } from './date'; 
import getURL_ES6 from './getURL_ES6';

const app = express()
const port=process.env.PORT

app.get('/', (req, res) =>{
    res.send('Hello world!')
})
app.get('/about', (req, res) => {
    res.send('Hello World!, Page about')
  })
app.get('/date', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' });
    res.send(`${date()}`);
});
app.get('/geturl', (req, res) => {
    res.status(200).set({'Content-Type': 'text/html; charset=utf-8'});
    res.write(`${getURL_ES6.getPath(req)}<br/>`);
    res.write(`${getURL_ES6.getParamesURL(req)}<br/>`);
});
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})