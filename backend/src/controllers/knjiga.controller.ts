import e, { response } from 'express';
import express from 'express'
import Knjiga from '../models/knjiga'
import Datum from '../models/datum'


export class KnjigaController{

    dohvatiKnjige=(req: express.Request, res: express.Response)=>{
        Knjiga.find({},(err, knjige)=>{
            if(err) console.log(err);
            else res.json(knjige);
        })
    }


    pretraga = (req: express.Request, res: express.Response)=>{
        let searchParam = req.query.param;
        let s;
        let s1;

        Knjiga.find({'naziv': {$regex: searchParam}}, (err, k)=>{
            if(err) console.log(err)
            else { res.json(k);}
            
            
        })

     
        
       
    }

    pretraga1 = (req: express.Request, res: express.Response)=>{
        let searchParam = req.query.param;
        

        Knjiga.find({'autor': {$regex: searchParam}}, (err, k)=>{
            if(err) console.log(err)
            else if(k){res.json(k);}
            
            
        })
        
      
    }
    pretraga2 = (req: express.Request, res: express.Response)=>{
        let searchParam = req.query.param;
        

        Knjiga.find({'izdavac': {$regex: searchParam}}, (err, k)=>{
            if(err) console.log(err)
            else if(k){res.json(k);}
            
            
        })
        
      
    }
    dohvatiKnjigu = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
       

        Knjiga.findOne({'id': id}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }


    obrisi = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
       

        Knjiga.deleteOne({'id': id}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }


    promeniOcenu = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        let o = req.body.ocena;
   

        Knjiga.updateOne({'id': id}, {$set: {'ocena': o}}, (err, resp)=>{
            if(err) console.log(err)
            
            Knjiga.updateOne({'id': id}, {$inc: {'brOcena': 1}}, (err, r)=>{
                if(err) console.log(err)
                
                else res.json()

            })

        })



    }
    promeniOcenuu = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        let o = req.body.ocena;
   

        Knjiga.updateOne({'id': id}, {$set: {'ocena': o}}, (err, resp)=>{
            if(err) console.log(err)
            

                
                else res.json()


        })



    }

    dodaj = (req: express.Request, res: express.Response)=>{
        let seqId;
        Datum.findOneAndUpdate({'id': 1}, {$inc: {'seq': 1}}, (err, resp)=>{
            if(err) console.log(err)
            seqId=resp.seq+1;

       
        let k =new Knjiga({
            naziv: req.body.naziv,
            autor: req.body.autor,
            zanr: req.body.zanr,
            izdavac: req.body.izdavac,
            godinaIzdavanja: req.body.godinaIzdavanja,
            jezik: req.body.jezik,
            slika:req.body.slika,
            brojZaduzenja:0,
            brOcena:0,
            broj:1,
            id:seqId,
            ocena:0

        })
    
        k.save((err,resp)=>{
           if(err){
               console.log(err);
               res.status(400).json({"message":"error"});
                     

           }
           //else res.json({"message":"ok"});
           res.json()

        })

    })

}
azuriraj = (req: express.Request, res: express.Response)=>{

    let naziv=req.body.naziv;
    let autor=req.body.autor;
    let zanr=req.body.zanr;
    let izdavac=req.body.izdavac;
    let godinaIzdavanja=req.body.godinaIzdavanja;
    let jezik=req.body.jezik;
    let slika=req.body.slika;
    let id=req.body.id;
    let broj=req.body.broj;

    Knjiga.updateOne({'id': id}, {$set: {'naziv': naziv}}, (err, resp)=>{
        if(err) console.log(err)
        Knjiga.updateOne({'id': id}, {$set: {'autor': autor}}, (err, resp)=>{
            if(err) console.log(err)
            Knjiga.updateOne({'id': id}, {$set: {'zanr': zanr}}, (err, resp)=>{
                if(err) console.log(err)
                Knjiga.updateOne({'id': id}, {$set: {'izdavac': izdavac}}, (err, resp)=>{
                    if(err) console.log(err)
                    Knjiga.updateOne({'id': id}, {$set: {'godinaIzdavanja': godinaIzdavanja}}, (err, resp)=>{
                        if(err) console.log(err)
                        Knjiga.updateOne({'id': id}, {$set: {'godinaIzdavanja': godinaIzdavanja}}, (err, resp)=>{
                            if(err) console.log(err)
                            Knjiga.updateOne({'id': id}, {$set: {'jezik': jezik}}, (err, resp)=>{
                                if(err) console.log(err)
                                Knjiga.updateOne({'id': id}, {$set: {'slika': slika}}, (err, resp)=>{
                                    if(err) console.log(err)
                                    Knjiga.updateOne({'id': id}, {$set: {'broj': broj}}, (err, resp)=>{
                                        if(err) console.log(err)
                                   
       
   
                                         res.json(resp)

                                        })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
}

