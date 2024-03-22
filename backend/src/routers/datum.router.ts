import express from 'express'
import { DatumController } from '../controllers/datum.controller';

const datumRouter = express.Router();

datumRouter.route('/dohvati').post(
    (req, res)=> new DatumController().dohvati(req, res)
)

datumRouter.route('/promeni').post(
    (req, res)=> new DatumController().promeni(req, res)
)
datumRouter.route('/rok').post(
    (req, res)=> new DatumController().rok(req, res)
)




export default datumRouter;