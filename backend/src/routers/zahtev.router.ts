import express from 'express'
import { ZahtevController } from '../controllers/zahtev.controller';

const zahtevRouter = express.Router();

zahtevRouter.route('/dodajZahtev').post(
    (req, res)=> new ZahtevController().dodajZahtev(req, res)
)

zahtevRouter.route('/dohvatiSve').get(
    (req, res)=> new ZahtevController().dohvatiSve(req, res)
)
zahtevRouter.route('/dohvatiSvee').get(
    (req, res)=> new ZahtevController().dohvatiSvee(req, res)
)

zahtevRouter.route('/obrisi').post(
    (req, res)=> new ZahtevController().obrisi(req, res)
)
zahtevRouter.route('/obrisii').post(
    (req, res)=> new ZahtevController().obrisii(req, res)
)

zahtevRouter.route('/dodajZahtevKnjiga').post(
    (req, res)=> new ZahtevController().dodajZahtevKnjiga(req, res)
)




export default zahtevRouter;