
import { Knjiga } from "./knjiga";
export class User{
 
    username:string;
    password:string;
    type:string;
    imePrezime:string;
adresa:string;
telefon:string;
mejl:string;
slika:string;
knjige: Array<number>;
blokiran:boolean;

}