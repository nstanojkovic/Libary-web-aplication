import express from 'express'
import { IstorijaController } from '../controllers/istorija.controller';

const istorijaRouter = express.Router();

istorijaRouter.route('/dohvati').post(
    (req, res)=> new IstorijaController().dohvati(req, res)
)
istorijaRouter.route('/dodaj').post(
    (req, res)=> new IstorijaController().dodaj(req, res)
)



export default istorijaRouter;