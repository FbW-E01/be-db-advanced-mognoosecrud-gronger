/*
- `update.js` - this one, when you run it, will update a single user (selected by username)
Ü/
*/

import { User } from './user.js';
import { connect, disconnect} from './connection.js';

await connect();

const update = await User.findOne({email: "hi@msn.com"});

if (update) {
    update.email = "gutentag@msn.com";
    await update.save();
}

await disconnect();


