import hashPass from './hashedPass';
import db from '../../models';
export default (req, res, next) => {
    if (!req.user || !req.user.id || !req.user.username || !req.user.password) {
        return res.status(401).send();
    }

    db.User.findOne({
        where: {
            username: req.user.username
        }
    }).then(found => {
        if (found) {
            return hashPass.compareHash(req.user.password, found.password).then(() => {
                console.log('test');
                return next();
            }, () => {
                res.status(401).send();
            })
        } else {
            return res.status(401).send();
        }
    }, () => {
        return res.status(401).send();
    });
}