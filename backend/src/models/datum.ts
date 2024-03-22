import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let Datum = new Schema({
    id: {
        type: Number
    },
    datum: {
        type: String
    },
 
  knjiga:{
        type:Number
    },
    seq:{
        type:Number
    },
    rok:{
        type:Number
    }
   
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('Datum', Datum, 'datum')