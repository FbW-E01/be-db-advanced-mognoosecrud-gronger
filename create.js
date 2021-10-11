/*
- `create.js` - this one, when you run it, will create 3 users
*/

import { User } from './user.js';
import { connect, disconnect } from './connection.js';

const personOne = {
    email: "hi@msn.com",
    password: "pass1234",
    role: "Admin",
}

const personTwo = {
    email: "FFFF@msn.com",
    password: "passWORD",
    role: "Editor",
}

const personThree = {
    email: "blaaaaaaaaaah@msn.com",
    password: "passwoooooooooord",
    role: "User",
}

await connect();
await User.create(personOne);
await User.create(personTwo);
await User.create(personThree);

await disconnect();


