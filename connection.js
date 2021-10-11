/*
- `connection.js` - this one exports functions to connect/disconnect Mongoose to Mongo
*/

import mongoose from 'mongoose';

//connect to mongod
const username = "joseph";
const password = "password";
const database = "user-db";


export const connect = async () => {
    const connectionString = `mongodb://${username}:${password}@localhost:27017/${database}`;

    await mongoose.connect(connectionString);
}

export const disconnect = async () => {
    await mongoose.disconnect();

}




