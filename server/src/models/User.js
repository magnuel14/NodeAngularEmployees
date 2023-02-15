const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    email:{type: String, require: true},
    password:{type: String, require: true},
},{
    timestamps:true,
    versionKey:false
})
module.exports = model('User', userSchema);