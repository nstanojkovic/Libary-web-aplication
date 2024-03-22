import express from 'express'
import { KomentarController } from '../controllers/komentar.controller';

const komentarRouter = express.Router();

komentarRouter.route('/dohvatiKomentare').get(
    (req, res)=> new KomentarController().dohvatiKomentare(req, res)
)
komentarRouter.route('/dodajKomentar').post(
    (req, res)=> new KomentarController().dodajKomentar(req, res)
)
komentarRouter.route('/azuriraj').post(
    (req, res)=> new KomentarController().azuriraj(req, res)
)


export default komentarRouter;