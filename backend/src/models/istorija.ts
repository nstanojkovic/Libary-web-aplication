

import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let Istorija = new Schema({
    knjiga: {
        type: Number
    },
    datumUzimanja: {
        type: String
    },
 
  datumVracanja:{
        type:String
    },
    korisnik:{
        type:String
    },
    naziv:{
        type:String
    },
    autor:{
        type:String
    }
   
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('Istorija', Istorija, 'istorija')