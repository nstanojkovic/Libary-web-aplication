import { Double } from "mongodb";
import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let Knjiga = new Schema({
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
    brojZaduzenja: {
        type: Number
    },
    slika:{
        type: String
    },
    ocena:{
        type: Number
    },
    brOcena:{
        type: Number
    },
    broj:{

        type: Number
    },
    id:{
        type: Number 
    }
   
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('Knjiga', Knjiga, 'knjige')