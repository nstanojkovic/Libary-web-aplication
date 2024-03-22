import express from 'express'
import UserModel from '../models/user'
import Knjiga from '../models/knjiga'
import Zahtev from '../models/zahtev'

export class UserController{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        UserModel.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }

    update = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let lozinka = req.body.lozinka;

        UserModel.updateOne({'username': korime}, {$set: {'password': lozinka}}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({'lozinka': 'updated'})
        })

    }

        promeniLozinku = (req: express.Request, res: express.Response)=>{
            let korime = req.body.korime;
            let lozinka = req.body.lozinka;
    
            UserModel.updateOne({'username': korime}, {$set: {'password': lozinka}}, (err, resp)=>{
                if(err) console.log(err)
                else res.json({'lozinka': 'updated'})
            })

        }

       /* NewsModel.updateOne({'id': id}, {$set: {"comments.$[comment].text": "News comment text"}}, {arrayFilters: [{
            "comment.text": "Comment 3"
        }]}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({'message': 'ok'})
        })*/
    

    dohvatiKorisnike=(req: express.Request, res: express.Response)=>{
        UserModel.find({'kolicina':{$gt:0}},(err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        })
    }

    dohvatiKorisnika = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
      

        UserModel.findOne({'username': username}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }

    razduziKnjigu = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let knjige = req.body.knjige;
        let knjiga=req.body.knjiga;

        UserModel.updateOne({'username': korime}, {$set: {'knjige': knjige}}, (err, resp)=>{
            if(err) console.log(err)
           // else res.json()
         
           Knjiga.updateOne({'id': knjiga}, {$inc: {'broj': 1}}, (err, r)=>{
            if(err) console.log(err)
            res.json()

        })
        
        })

    }

    rok = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let rok = req.body.rok;

        UserModel.updateOne({'username': korime}, {$set: {'rok': rok}}, (err, resp)=>{
            if(err) console.log(err)
            else res.json()
        })

    }

    dodaj = (req: express.Request, res: express.Response)=>{

        Zahtev.deleteOne({'korIme': req.body.username}, (err, u)=>{
            if(err) console.log(err);


        let k=[];
        let z =new UserModel({
           username:req.body.username,
           password:req.body.password,
           type:req.body.type,
           imePrezime:req.body.imePrezime,
           telefon:req.body.telefon,
           mejl:req.body.mejl,
           slika:req.body.slika,
           adresa:req.body.adresa,
            knjige:k,
            blokiran:false
        })
        z.save((err,resp)=>{
           if(err){
               console.log(err);
               res.status(400).json({"message":"error"});
                     

           }
           else res.json({"message":"ok"});

        })
    })

}

dodajj = (req: express.Request, res: express.Response)=>{

   
    let k=[];
    let z =new UserModel({
       username:req.body.username,
       password:req.body.password,
       type:req.body.type,
       imePrezime:req.body.imePrezime,
       telefon:req.body.telefon,
       mejl:req.body.mejl,
       slika:req.body.slika,
        knjige:k,
        adresa:req.body.adresa,
        blokiran:false
    })
    z.save((err,resp)=>{
       if(err){
           console.log(err);
           res.status(400).json({"message":"error"});
                 

       }
       else res.json({"message":"ok"});

    })

}

obrisi = (req: express.Request, res: express.Response)=>{
    let korime = req.body.username;
  

    UserModel.deleteOne({'username': korime}, (err, resp)=>{
        if(err) console.log(err)
        else res.json()
    })

}


azuriraj = (req: express.Request, res: express.Response)=>{

    let username=req.body.username;
    let password=req.body.password;
    let type=req.body.type;
    let imePrezime=req.body.imePrezime;
    let telefon=req.body.telefon;
    let mejl=req.body.mejl;
    let slika=req.body.slika;
    let adresa=req.body.adresa;
    //let knjige=[]

    UserModel.updateOne({'username': username}, {$set: {'username': username}}, (err, resp)=>{
        if(err) console.log(err)
        UserModel.updateOne({'username': username}, {$set: {'password': password}}, (err, resp)=>{
            if(err) console.log(err)
            UserModel.updateOne({'username': username}, {$set: {'type': type}}, (err, resp)=>{
                if(err) console.log(err)
                UserModel.updateOne({'username': username}, {$set: {'imePrezime': imePrezime}}, (err, resp)=>{
                    if(err) console.log(err)
                    UserModel.updateOne({'username': username}, {$set: {'adresa': adresa}}, (err, resp)=>{
                        if(err) console.log(err)
                        UserModel.updateOne({'username': username}, {$set: {'telefon': telefon}}, (err, resp)=>{
                            if(err) console.log(err)
                            UserModel.updateOne({'username': username}, {$set: {'mejl': mejl}}, (err, resp)=>{
                                if(err) console.log(err)
                                UserModel.updateOne({'username': username}, {$set: {'slika': slika}}, (err, resp)=>{
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
}



podigni = (req: express.Request, res: express.Response)=>{
    let korime = req.body.username;
   

    UserModel.updateOne({'username': korime}, {$set: {'type': 'moderator'}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({'lozinka': 'updated'})
    })

}

spusti = (req: express.Request, res: express.Response)=>{
    let korime = req.body.username;
    

    UserModel.updateOne({'username': korime}, {$set: {'type': 'citalac'}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({'lozinka': 'updated'})
    })

}

blokiraj = (req: express.Request, res: express.Response)=>{
    let korime = req.body.username;
    

    UserModel.updateOne({'username': korime}, {$set: {'blokiran': true}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({'lozinka': 'updated'})
    })

}


odblokiraj = (req: express.Request, res: express.Response)=>{
    let korime = req.body.username;
    

    UserModel.updateOne({'username': korime}, {$set: {'blokiran': false}}, (err, resp)=>{
        if(err) console.log(err)
        
        else res.json({'lozinka': 'updated'})
    })
   
}
  
}