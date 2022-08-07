const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.status(200).send('Hello world! :3')
})

app.post('/teams/pokemons', () => {
    res.status(200).send('Hello world! :3')
})

app.get('/team', () => {
    res.status(200).send('Hello world! :3')
})

app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello world! :3')
})

app.put('/team', () => {
    res.status(200).send('Hello world! :3')
})


//Listn
app.listen(port, () => {
    console.log("Server started at port " + port)
});
