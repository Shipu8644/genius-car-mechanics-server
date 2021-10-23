const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from genius Car')
})

app.listen(port, () => {
    console.log(`Listening from port`, port)
})