import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let ZahtevKnjiga = new Schema({
   
    naziv: {
        type: String
    },
    zanr: {
        type: Array
    },
    autor: {
        type: String
    },
    izdavac: {
        type: String
    },
    godinaIzdavanja: {
        type: Number
    },
    jezik:{
        type: String
    },
   
    slika:{
        type: String
    },
 
    korisnik:{
        type: String 
    }
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('ZahtevKnjiga', ZahtevKnjiga, 'zahteviKnjige')