import express from 'express';
import routes from './routes';


const app = express();

app.use(express.json());

/*app.get('/users', (request, response) => {
    const users = [
        {name: 'Sabrina', age: 25},
        {name: 'Diego', age: 27},

    ];

    return response.json(users);
});

app.post('/users', (request, response) => {
    console.log(request.body);
    
    const users = [
        {name: 'Sabrina', age: 25},
        {name: 'Diego', age: 27},

    ];

    return response.json(users);
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    
    const users = [
        {name: 'Sabrina', age: 25},
        {name: 'Diego', age: 27},

    ];

    return response.json(users);
});

app.get('/users', (request, response) => {
    console.log(request.query);
    
    const users = [
        {name: 'Sabrina', age: 25},
        {name: 'Diego', age: 27},

    ];

    return response.json(users);
});
*/


app.use(routes);

app.listen(3333);

