import express from 'express'
import Komentar from '../models/komentar'


export class KomentarController{

    dohvatiKomentare=(req: express.Request, res: express.Response)=>{
        Komentar.find({},(err, knjige)=>{
            if(err) console.log(err);
            else res.json(knjige);
        })


        
    }
    dodajKomentar = (req: express.Request, res: express.Response)=>{
        let z =new Komentar({
            knjiga: req.body.knjiga,
            korisnik: req.body.korisnik,
            ocena: req.body.ocena,
            komentar: req.body.komentar,
            datum:req.body.datum,
            azurirano:false
         
        })
        z.save((err,resp)=>{
           if(err){
               console.log(err);
               res.status(400).json({"message":"error"});
                     

           }
           else res.json({"message":"ok"});

        })

    }
    azuriraj=(req: express.Request, res: express.Response)=>{
        let korisnik=req.body.korisnik;
        let knjiga=req.body.knjiga;
        let ocena=req.body.ocena;
        let komentar=req.body.komentar;
        

        Komentar.updateOne({'korisnik':korisnik,'knjiga':knjiga}, {$set: {'azurirano': true}},(err, knjige)=>{
            if(err) console.log(err);
            Komentar.updateOne({'korisnik':korisnik,'knjiga':knjiga}, {$set: {'komentar': komentar}},(err, knjige)=>{
                if(err) console.log(err);
                Komentar.updateOne({'korisnik':korisnik,'knjiga':knjiga}, {$set: {'ocena': ocena}},(err, knjige)=>{
                    if(err) console.log(err);

                    
            else res.json(knjige);
        })
    })
})


        
    }
}