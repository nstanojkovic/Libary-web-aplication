import { Double } from "mongodb";
import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let Komentar = new Schema({
    knjiga: {
        type: Number
    },
    korisnik: {
        type: String
    },
    ocena: {
        type: Number
    },
    komentar:{
        type:String
    },
    datum:{
        type:String
    },
    azurirano:{
        type:Boolean
    }
  
   
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('Komentar', Komentar, 'komentari')