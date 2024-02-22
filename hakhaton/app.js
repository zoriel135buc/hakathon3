const express = require('express');
const bcrypt = require('express');
const app = express();
const knex = require('knex');
const db = knex({
    client:'pg',
    connection:{
        host:'localhost',
        port: '5433',
        user:'postgres',
        database:'dvdrental',
        password:'yossef123',

    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());