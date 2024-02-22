const express = require('express');
const bcrypt = require('express');
const app = express();
const router = express.Router();
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


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("okkk")
});

app.post('/register', async (req, res) => {
    const { first_name, last_name, email, username, password } = req.body;
    try {
        await db("users")
        .insert({first_name:first_name,last_name:last_name,email:email,username:username,password:password})
         res.sendFile(__dirname+'/index/index.html')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});