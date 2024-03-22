import e from 'express';
import express from 'express'
import Datum from '../models/datum';
import UserModel from '../models/user';
import Zaduzivanje from '../models/zaduzivanje'
import Knjiga from '../models/knjiga'


export class ZaduzivanjeController{

    dohvati=(req: express.Request, res: express.Response)=>{
        
       let korisnik=req.body.korisnik;
       let knjiga=req.body.knjiga;

        Zaduzivanje.findOne({'korisnik':korisnik,'knjiga':knjiga},(err, i)=>{
            if(err) console.log(err);
            else {

                res.json(i);
            }
        })
    }

    obrisi=(req: express.Request, res: express.Response)=>{
        
        let korisnik=req.body.korisnik;
        let knjiga=req.body.knjiga;
 
         Zaduzivanje.deleteOne({'korisnik':korisnik,'knjiga':knjiga},(err, i)=>{
             if(err) console.log(err);
             else {
 
                 res.json();
             }
         })
     }

     dohvatiSve=(req: express.Request, res: express.Response)=>{
        Zaduzivanje.find({},(err, z)=>{
            if(err) console.log(err);
            else res.json(z);
        })
    }

    dodaj = (req: express.Request, res: express.Response)=>{

        let du=new Date();
        let pom;
        Datum.findOne({'id':1},(err,d)=>{
            if(err) console.log(err);

            //pom=d.rok.getDay()+du;
            pom = new Date();
  pom.setDate( pom.getDate() + d.rok );

  UserModel.findOne({'username': req.body.korisnik}, (err, k)=>{
    if(err) console.log(err)
    let kk=k.knjige;
    kk[k.knjige.length]=req.body.knjiga;
    
    UserModel.updateOne({'username': req.body.korisnik}, {$set: {'knjige': kk}}, (err, resp)=>{
        if(err) console.log(err)
       
        Knjiga.updateOne({'id': req.body.knjiga}, {$inc: {'broj': -1}}, (err, r)=>{
            if(err) console.log(err)
            Knjiga.updateOne({'id': req.body.knjiga}, {$inc: {'brojZaduzenja': 1}}, (err, r)=>{
                if(err) console.log(err)

        
        let z =new Zaduzivanje({
            knjiga: req.body.knjiga,
            datumUzimanja: du,
            datumVracanja: pom,
            korisnik: req.body.korisnik,
            rok:false
           
            
        })
        z.save((err,resp)=>{
           if(err){
               console.log(err);
               res.status(400).json({"message":"error"});
                     

           }
           else res.json({"message":"ok"});

        })
    })

    })
})
})
   
})

}


   produzi=(req: express.Request, res: express.Response)=>{
        
    let korisnik=req.body.korisnik;
    let knjiga=req.body.knjiga;


    Datum.findOne({'id':1},(err,d)=>{
        if(err) console.log(err);
      
     Zaduzivanje.findOneAndUpdate({'korisnik':korisnik,'knjiga':knjiga}, {$set: {'rok': true}},(err, i)=>{
         if(err) console.log(err);

         let pom=new Date(i.datumVracanja);

         pom.setDate( pom.getDate() + d.rok );

         Zaduzivanje.updateOne({'korisnik':korisnik,'knjiga':knjiga}, {$set: {'datumVracanja': pom}},(err, i)=>{
            if(err) console.log(err);
         else {

             res.json(i);
         }
        })
     })
    })
 }



}