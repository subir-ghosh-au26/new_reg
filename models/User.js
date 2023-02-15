const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        index: { unique: true },
        required: [true, "can't be blank"]
    },
    mobile:{
        type: Number,
        required: [true, "can't be blank"]
    },
    emergency_no:{
        type: Number,
        required: [true, "can't be blank"]
    },
    designation:{
        type: String,
        required: [true, "can't be blank"]
    },
    doj:{
        type: Date,
        required: [true, "can't be blank"],
        default: Date.now
    },
    department:{
        type: String,
        required: [true, "can't be blank"]
    },
    salary:{
        type: Number,
        required: [true, "can't be blank"]
    },
    grade_pay:{
        type: Number,
        required: [true, "can't be blank"]
    },
    dob:{
        type: Date,
        required: [true, "can't be blank"],
        default: Date.now
    },
    gender: {
        type: String,
        enum: "Male"||"Female",
        required: true,
    },
    maritalStatus:{
        type: String,
        enum: "Married"||"Unmarried",
        required: true,
    },
    category:{
        type: String,
        enum: "SC"||"ST"||"BC/MBC"||"General"||"EWS",
        required: true,
    },
    officialAddress:{
        type: String,
        required: [true, "can't be blank"]
    },
    residentialAddress:{
        type: String,
        required: [true, "can't be blank"]
    },
    education:{
        type: String,
        required: [true, "can't be blank"]
    },
    workExperience:{
        type: String,
        required: [true, "can't be blank"]
    },
    computerKnowledge:{
        type: String,
        required: [true, "can't be blank"]
    },
    trainingExp:{
        type: String,
        required: [true, "can't be blank"]
    },
    technical:{
        type: String,
        required: [true, "can't be blank"]
    },  
    profileImg: {
        type: String
    },
    sign: {
        type: String
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)