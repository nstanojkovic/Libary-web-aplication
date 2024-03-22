
import mongoose, { Schema } from "mongoose";
const Projekat = mongoose.Schema;

let Zaduzivanje = new Schema({
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
    rok:{
        type:Boolean
    }
   
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('Zaduzivanje', Zaduzivanje, 'zaduzivanja')