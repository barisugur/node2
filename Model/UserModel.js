const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    isim: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        lowercase: true,
        maxlength: 20
    },
    soyisim: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        lowercase: true,
        maxlength: 20
    },
    yas: {
        type: Number,
        required: true,
        trim: true
    }
},{collection:'Users', timestamps:true});

const User = mongoose.model('User', UserSchema);
module.exports = User;