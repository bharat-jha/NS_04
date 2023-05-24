const fs = require('fs')
const path = require('path')
const http = require('http')
const dbConnect = require('./mongodb.js')

const dbName = 'GSTN'

console.warn('Using alternate way to handle Promises while inserting records  ')

const insert = async() => {
    let db = await dbConnect(dbName, 'GN_Mth')
    const data = await db.insertOne({
        "name": "IPAD ",
        "brand": "Apple",
        "country": "India",
        "price": "34000"
    })
    if (data.acknowledged) {
        console.log('Data Inserted in DB')
    } else {
        console.log('Some data Issues ... Kindly check ')
    }
    db.close
}
insert();