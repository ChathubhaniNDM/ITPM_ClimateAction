const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    
    donation_amount : {
        type : Number,
        required : true

    },
    cardNo : {
     type : Number,
     required : true

    },
    expiry_date : {
     type : String,
     required : true

    },
    cvc : {
     type : Number,
     required : true

    },
    
})
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
