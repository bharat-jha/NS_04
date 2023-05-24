const fs = require('fs')
const path = require('path')
const http = require('http')
const dbConnect = require('./mongodb.js')

const dbName = 'GSTN'

console.warn('Using alternate way to handle Promises while inserting records  ');

const update = async() => {
    let db = await dbConnect(dbName, 'GN_Mth')
    const data = await db.updateOne({ name: "Iphone17" }, { $set: { name: 'Iphone14 Pro', price: '130000' } })
    console.log(data)
};

update();