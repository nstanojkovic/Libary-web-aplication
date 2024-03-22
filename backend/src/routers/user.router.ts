import express from 'express'
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res)=>new UserController().login(req, res)
)
userRouter.route('/dohvatiKorisnika').post(
    (req, res)=>new UserController().dohvatiKorisnika(req, res)
)

userRouter.route('/update').post(
    (req, res)=> new UserController().update(req, res)
)
userRouter.route('/promeniLozinku').post(
    (req, res)=> new UserController().promeniLozinku(req, res)
)

userRouter.route('/dohvatiKorisnike').get(
    (req, res)=> new UserController().dohvatiKorisnike(req, res)
)

userRouter.route('/razduziKnjigu').post(
    (req, res)=>new UserController().razduziKnjigu(req, res)
)
userRouter.route('/rok').post(
    (req, res)=>new UserController().rok(req, res)
)

userRouter.route('/dodaj').post(
    (req, res)=>new UserController().dodaj(req, res)
)
userRouter.route('/dodajj').post(
    (req, res)=>new UserController().dodajj(req, res)
)

userRouter.route('/obrisi').post(
    (req, res)=>new UserController().obrisi(req, res)
)

userRouter.route('/azuriraj').post(
    (req, res)=>new UserController().azuriraj(req, res)
)
userRouter.route('/podigni').post(
    (req, res)=>new UserController().podigni(req, res)
)
userRouter.route('/spusti').post(
    (req, res)=>new UserController().spusti(req, res)
)

userRouter.route('/blokiraj').post(
    (req, res)=>new UserController().blokiraj(req, res)
)
userRouter.route('/odblokiraj').post(
    (req, res)=>new UserController().odblokiraj(req, res)
)





export default userRouter;