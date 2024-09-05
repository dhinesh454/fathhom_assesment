const mongoose  = require('mongoose');



const manageHealthSchema = new mongoose.Schema({
    mood:String,
    entrydate:{
        type:Date,
        default:Date.now
    },
    notes:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});


const ManageHealth = mongoose.model('ManageHealth',manageHealthSchema);

module.exports =  ManageHealth;