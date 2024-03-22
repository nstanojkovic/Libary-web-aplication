import e from 'express';
import express from 'express'
import Datum from '../models/datum'


export class DatumController{

    dohvati=(req: express.Request, res: express.Response)=>{
        
let id=req.body.id;

        Datum.findOne({'id':id},(err, i)=>{
            if(err) console.log(err);
            else res.json(i);
            
        })
    }

    promeni=(req: express.Request, res: express.Response)=>{
        
        let id=req.body.id;
        let knjiga=req.body.knjiga;
        let datum=req.body.datum;

        Datum.updateOne({'id': id}, {$set: {'knjiga': knjiga}}, (err, resp)=>{
            if(err) console.log(err)
          
            Datum.updateOne({'id': id}, {$set: {'datum': datum}}, (err, resp)=>{

                 res.json()

            })

            })

        
            }

            rok=(req: express.Request, res: express.Response)=>{
                let rok=req.body.rok;

                Datum.findOneAndUpdate({'id':1},{$set: {'rok': rok}},(err, i)=>{
                    if(err) console.log(err);
                    else res.json(i);
                    
                })
            }
}