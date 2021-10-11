/*
- `read.js` - this one, when you run it, will read and log all users
*/

import { connect, disconnect} from './connection.js';
import { User } from './user.js';

await connect();

const find = await User.find();

find.map(result => console.log(result));

await disconnect();


