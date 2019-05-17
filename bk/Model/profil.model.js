const mongoose = require('mongoose');

const ProfilSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
    email: String,
    password :String
}, {
    timestamps: true
});
/* _id: {type:Number,required:true} */

module.exports = mongoose.model('profil', ProfilSchema);