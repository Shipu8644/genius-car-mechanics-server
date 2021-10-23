const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// user: geniusMechanic
// password: 99fSkR05VTXzAwiq
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.om5y9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('connected to db right');
        //   const database = client.db("insertDB");
        //   const haiku = database.collection("haiku");
        //   // create a document to insert
        //   const doc = {
        //     title: "Record of a Shriveled Datum",
        //     content: "No bytes, no problem. Just insert a document, in MongoDB",
        //   }
        //   const result = await haiku.insertOne(doc);
        //   console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from genius Car')
})

app.listen(port, () => {
    console.log(`Listening from port`, port)
})