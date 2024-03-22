import mongoose, { Schema } from "mongoose";

const Projekat = mongoose.Schema;

let User = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
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
    },
    knjige:{
        type:Array
    },
    blokiran:{
        type:Boolean
    }
})

//prvi naziv modela drugi je sema a treci je naziv kolekcije
export default mongoose.model('UserModel', User, 'korisnici')