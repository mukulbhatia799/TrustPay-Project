const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mukulbhatia189:<password>@cluster0.zg7kjju.mongodb.net/");

// const userSchema = new mongoose.Schema({
//     username: String,
//     firstname: String,
//     lastname: String,
//     password: String
// })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
        lowercase: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50,
        lowercase: true
    },
    secondname: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 50
    }
})

const User = mongoose.model('UserSchema', userSchema);

module.exports = User;