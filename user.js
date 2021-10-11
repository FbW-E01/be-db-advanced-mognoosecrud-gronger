/*
- `user.js` - this one defines a User schema and model
    - Users will contain the following field
        - `email` (unique string)
        - `password` (string, 8 characters minimum)
        - `role` (User, Admin or Editor)
*/
import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:  {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enumValues: ["User", "Admin", "Editor"]
    }
})


export const User = mongoose.model('users', userSchema);

