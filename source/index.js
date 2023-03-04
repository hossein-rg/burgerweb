const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.static('source'));
const fs = require('fs');


// read files (HTMl)
const indexPage = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
const loginPageInitial = fs.readFileSync(`${__dirname}/dashbord/index.html`, 'utf-8');
const confirmpage = fs.readFileSync(`${__dirname}/dashbord/confirmcode.html`, 'utf-8');
const loginPage = fs.readFileSync(`${__dirname}/dashbord/logininputs.html`, 'utf-8');
const dashbordPage = fs.readFileSync(`${__dirname}/dashbord/mainDashbord/index.html`,'utf-8');


// handle req.body and get data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
        res.status(200).send(indexPage);
    } catch { console.log('something wrong!') }
})


app.get('/yourDashbord', async (req, res) => {
    try{
        // const dashbordPage = fs.readFileSync(`${__dirname}/dashbord/mainDashbord/index.html`,'utf-8');
        res.status(200).send(dashbordPage);
    }catch{
        console.log('error');
    }
})


app.get('/login', async (req, res) => {
    try {
        console.log(req.body);
        // const loginPageInitial = fs.readFileSync(`${__dirname}/dashbord/index.html`, 'utf-8');
        // const loginPage = fs.readFileSync(`${__dirname}/dashbord/logininputs.html`, 'utf-8');
        const replaceLoginPage = loginPageInitial.replace(/{%LOGIN_INPUTS%}/, loginPage);
        res.status(200).send(replaceLoginPage);
    } catch {
        console.log('error');
    }
})
app.post('/login', async (req, res) => {
    try {
        const data = req.body;
        if(data.confirm == '8888'){
            res.redirect('/yourDashbord');
        }
        // console.log(data)
        else if(data.Number){
        // const loginPageInitial = fs.readFileSync(`${__dirname}/dashbord/index.html`, 'utf-8');
        // const confirmpage = fs.readFileSync(`${__dirname}/dashbord/confirmcode.html`, 'utf-8');
        const repPageCon = loginPageInitial.replace(/{%CONFIRM1_CODE%}/, confirmpage);
        const setNumber = repPageCon.replace(/{%NUMBER%}/, data.Number);
        res.send(setNumber)
        }
    } catch {
        console.log('error')
    }
})


// app.post('/dashbord', async (req, res) => {
//     try {
//         res.send(dashbordPage);
//     } catch {
//         console.log('something went wrong !');
//     }
// })

app.listen(8090, (req, res) => {
    console.log('your in 127.0.0.1:8080');
})
