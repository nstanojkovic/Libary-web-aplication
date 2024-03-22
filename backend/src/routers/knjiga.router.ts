import express from 'express'
import { KnjigaController } from '../controllers/knjiga.controller';

const knjigaRouter = express.Router();

knjigaRouter.route('/dohvatiKnjige').get(
    (req, res)=> new KnjigaController().dohvatiKnjige(req, res)
)
knjigaRouter.route('/dohvatiKnjigu').post(
    (req, res)=> new KnjigaController().dohvatiKnjigu(req, res)
)
knjigaRouter.route('/promeniOcenu').post(
    (req, res)=> new KnjigaController().promeniOcenu(req, res)
)
knjigaRouter.route('/promeniOcenuu').post(
    (req, res)=> new KnjigaController().promeniOcenuu(req, res)
)

knjigaRouter.route('/pretraga').get(
    (req, res)=> new KnjigaController().pretraga(req, res)
)
knjigaRouter.route('/pretraga1').get(
    (req, res)=> new KnjigaController().pretraga1(req, res)
)
knjigaRouter.route('/pretraga2').get(
    (req, res)=> new KnjigaController().pretraga2(req, res)
)

knjigaRouter.route('/dodaj').post(
    (req, res)=> new KnjigaController().dodaj(req, res)
)
knjigaRouter.route('/azuriraj').post(
    (req, res)=> new KnjigaController().azuriraj(req, res)
)
knjigaRouter.route('/obrisi').post(
    (req, res)=> new KnjigaController().obrisi(req, res)
)


export default knjigaRouter;