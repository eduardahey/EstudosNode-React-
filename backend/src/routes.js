const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;
// routes.get('/ongs', async(request, response) => {
//     const ongs = await connection('ongs').select('*');
//     return response.json(ongs);
// });

// routes.post('/ongs', async (request, response) => {
//     // return response.send('Hello World');
//     // const params = request.query;
//     // const params = request.params;
//     // const body = request.body;
//     // const data = request.body;
//     // const {name, email, whatsaap, city, uf} = request.body;
//     // const id = crypto.randomBytes(4).toString('HEX');

//     // await conection('ongs').insert({
//     //     id,
//     //     name,
//     //     email,
//     //     whatsaap,
//     //     city,
//     //     uf,
//     // })

//     // return response.json({ id });
// });
