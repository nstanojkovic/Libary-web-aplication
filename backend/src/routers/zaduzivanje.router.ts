
import express from 'express'
import { ZaduzivanjeController } from '../controllers/zaduzivanje.controller';

const zaduzivanjeRouter = express.Router();

zaduzivanjeRouter.route('/dohvati').post(
    (req, res)=> new ZaduzivanjeController().dohvati(req, res)
)
zaduzivanjeRouter.route('/obrisi').post(
    (req, res)=> new ZaduzivanjeController().obrisi(req, res)
)

zaduzivanjeRouter.route('/dohvatiSve').get(
    (req, res)=> new ZaduzivanjeController().dohvatiSve(req, res)
)

zaduzivanjeRouter.route('/dodaj').post(
    (req, res)=> new ZaduzivanjeController().dodaj(req, res)
)
zaduzivanjeRouter.route('/produzi').post(
    (req, res)=> new ZaduzivanjeController().produzi(req, res)
)





export default zaduzivanjeRouter;