const fs = require('fs');
const path = require('path');
const http = require('http');
const dbConnect = require('./mongodb.js');

const dbName = 'GSTN';

console.warn("Using alternate way to handle Promises ");

const main = async() => {

    let data = await dbConnect(dbName, 'GN_Mth');
    data = await data.find({ name: "Iphone 4" }).toArray();
    console.log(data)


};

main();


/* Alternate way code : For reference ...
let x = dbConnect(dbName, 'GN_Mth'); // passing the dbname and table name values as parameters...
//console.log(x) // return promise

dbConnect(dbName, 'GN_Mth').then((resp) => {
    resp.find().toArray().then((data) => {
        console.log(data);
    })
});
*/
// Another way to call