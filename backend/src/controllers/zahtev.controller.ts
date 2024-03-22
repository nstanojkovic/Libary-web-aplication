import express from 'express'

import Zahtev from '../models/zahtev'
import ZahtevKnjiga from '../models/zahtevKnjiga'

export class ZahtevController{

   dodajZahtev = (req: express.Request, res: express.Response)=>{
            let z =new Zahtev({
                korIme: req.body.korIme,
                lozinka: req.body.lozinka,
                imePrezime: req.body.imePrezime,
                telefon: req.body.telefon,
                mejl: req.body.mejl,
                adresa: req.body.adresa,
                slika:req.body.slika,
            })
            z.save((err,resp)=>{
               if(err){
                   console.log(err);
                   res.status(400).json({"message":"error"});
                         
   
               }
               else res.json({"message":"ok"});

            })

    }

    dohvatiSve=(req: express.Request, res: express.Response)=>{
        Zahtev.find({},(err, z)=>{
            if(err) console.log(err);
            else res.json(z);
        })
    }
    dohvatiSvee=(req: express.Request, res: express.Response)=>{
        ZahtevKnjiga.find({},(err, z)=>{
            if(err) console.log(err);
            else res.json(z);
        })
    }

    obrisi=(req: express.Request, res: express.Response)=>{
        let korIme=req.body.korIme;

        Zahtev.deleteOne({'korIme':korIme},(err, z)=>{
            if(err) console.log(err);
            else res.json(z);
        })
    }
    obrisii=(req: express.Request, res: express.Response)=>{
        let korIme=req.body.korIme;
        let naziv=req.body.naziv;

        ZahtevKnjiga.deleteOne({'korisnik':korIme,'naziv':naziv},(err, z)=>{
            if(err) console.log(err);
            else res.json(z);
        })
    }

    dodajZahtevKnjiga = (req: express.Request, res: express.Response)=>{
        let z =new ZahtevKnjiga({
            naziv:req.body.naziv,
            zanr:req.body.zanr,
            autor:req.body.autor,
            izdavac:req.body.izdavac,
            godinaIzdavanja:req.body.godinaIzdavanja,
            jezik:req.body.jezik,
            slika:req.body.slika,
            korisnik:req.body.korisnik
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