

const express = require('express');
const app = express();
const PORT = process.env.PORT ||8000;

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.post('/students', (req, res) => {
    res.send("Hello from server");
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})