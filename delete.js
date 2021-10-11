/*
- `delete.js` - this one, when you run it, will delete a single user (selected by username)
*/

import { User } from './user.js';
import { connect, disconnect} from './connection.js';

await connect();

const deleteThis = await User.findOne({email: "FFFF@msn.com"});

await User.deleteOne(deleteThis);

await disconnect();
