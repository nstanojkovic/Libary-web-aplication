import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routers/user.router';
import zahtevRouter from './routers/zahtev.router';
import knjigaRouter from './routers/knjiga.router';
import komentarRouter from './routers/komentar.router';
import istorijaRouter from './routers/istorija.router';
import zaduzivanjeRouter from './routers/zaduzivanje.router';
import datumRouter from './routers/datum.router';



const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/Projekat')
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('db connected')
})

const router = express.Router();
router.use('/korisnici', userRouter);
router.use('/zahtevi', zahtevRouter);
router.use('/knjige', knjigaRouter);
router.use('/komentari', komentarRouter);
router.use('/istorija', istorijaRouter);
router.use('/zaduzivanja', zaduzivanjeRouter);
router.use('/datum', datumRouter);


//ne sme da se ostavi get iz starijeg i onda ne moze da prihvati nijedan zahtev
app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));