import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let Zahtev = new Schema({
   
    korIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    imePrezime: {
        type: String
    },
    telefon:{
        type:String

    },
    mejl:{
        type:String
    },
    adresa:{
        type:String
    },
    slika:{
        type:String
    }
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('Zahtev', Zahtev, 'zahtevi')