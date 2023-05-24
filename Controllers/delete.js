const dbConnect = require('./mongodb.js')

const dbName = 'GSTN';

console.warn('Using alternate way to handle Promises while inserting records  ')

const deleteR = async() => {
    let db = await dbConnect(dbName, 'GN_Mth')
    const data = await db.deleteOne({
        // insertone is new function not insert alone ... name change...
        name: 'MicroMax Pro 4',
        brand: 'MicroMax',
        country: 'India',
        price: '12000',
    })
    console.log(data);
    if (data.acknowledged) {
        console.log('Data Inserted in DB');
    } else {
        console.log('Some data Issues ... Kindly check ');
    }
    db.close
}
deleteR();