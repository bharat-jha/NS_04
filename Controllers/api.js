const express = require("express")
const dbConnect = require('./mongodb')

const app = express();

const dbname = 'GSTN';
const tbl = 'GN_Mth';

app.use(express.json());

app.get('/', async(res, resp) => {
    let results = await dbConnect(dbname, tbl);
    let connection = await results.find().toArray();
    for (obj of connection) { console.log(obj.name + ' ' + obj.price) };
    resp.send(connection);
});

app.post('/', async(req, resp) => {
    let results = await await dbConnect(dbname, tbl);
    console.log(req.body)
    let connection = await results.insertOne(req.body);
    if (connection.acknowledged) {
        console.log('Data Inserted in DB')
    } else {
        console.log('Some data Issues ... Kindly check ')
    }
    results.close;
});

app.listen(5000);