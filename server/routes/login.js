import express from 'express';
import hashPass from './resources/hashedPass.js';
import db from '../models';
var jwt = require('jsonwebtoken');
const router = express.Router();
router.post('/hash', (req, res) => {
    hashPass.getHash(req.body.password).then((hash) => {
        res.send(hash);
    }, () => {
        res.status(500).send();
    })
});
router.post('/login', (req, res) => {
    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(found => {
        if (found) {
            hashPass.compareHash(req.body.password, found.password).then(() => {
                res.json(jwt.sign({ username: req.body.username, password: req.body.password, id: found.id }, process.env.JWT_SECRET));
            }, () => {
                res.status(401).send();
            })
        } else {
            res.status(401).send();
        }
    }, () => {
        res.status(401).send();
    });
});
router.post('/register', (req, res) => {
    if (req.body.accessCode === "pajouxparty") {
        hashPass.getHash(req.body.password).then((hash) => {
            const user = {
                username: req.body.username,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            }
            db.User.create(user).then(newUser => res.json(jwt.sign({ username: newUser.username, id: newUser.id, password: newUser.password }, process.env.JWT_SECRET)), 
            error => res.status(401).json(error));
        }, () => {
            res.status(500).send();
        });
        return;
    }
    res.status(401).json({error: {accessCode: "Incorrect Access Code."}});
});
export default router;