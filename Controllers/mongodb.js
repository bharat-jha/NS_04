const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);


async function dbConnect(db, tbl) {

    let results = await client.connect();
    let collections = results.db(db).collection(tbl); // checking if chaining can work here ...with params passed from outside
    //let collections = db.collection('GN_Mth');
    //var response = await collections.find({ brand: 'Samsung' }).toArray(); // Only those records where brand is Samsung...
    //client.close()
    //console.log(response);
    return (collections);
};


module.exports = dbConnect;

/* Original code which we will be modifying : to make code more modular ....

async function getData(db, tbl) {

    let results = await client.connect();
    let collections = results.db(db).collection(tbl); // checking if chaining can work here ...with params passed from outside
    //let collections = db.collection('GN_Mth');
    var response = await collections.find({ brand: 'Samsung' }).toArray(); // Only those records where brand is Samsung...
    client.close()
    console.log(response);
    return (response)
};




 */