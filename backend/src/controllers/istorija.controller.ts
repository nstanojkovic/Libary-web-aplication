import e from 'express';
import express from 'express'
import Istorija from '../models/istorija'


export class IstorijaController{

    dohvati=(req: express.Request, res: express.Response)=>{
        
let korisnik=req.body.korisnik;

        Istorija.find({'korisnik':korisnik},(err, i)=>{
            if(err) console.log(err);
            else {

                res.json(i);
            }
        })
    }

    dodaj = (req: express.Request, res: express.Response)=>{
        let z =new Istorija({
            knjiga: req.body.knjiga,
            datumUzimanja: req.body.datumUzimanja,
            datumVracanja: req.body.datumVracanja,
            korisnik: req.body.korisnik,
            naziv: req.body.naziv,
            autor: req.body.autor
            
        })
        z.save((err,resp)=>{
           if(err){
               console.log(err);
               res.status(400).json({"message":"error"});
                     

           }
           else res.json({"message":"ok"});

        })

}

}