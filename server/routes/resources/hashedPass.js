import bcrypt from 'bcryptjs';

const compareHash = (password, hashPass) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashPass, (err, res) => {
            if (err || !res) {
                return reject();
            }
            resolve(true);
        })
    })
}

const getHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, res) => {
            if (err) {
                return reject();
            }
            resolve(res);
        })
    })
}

export default {
    getHash,
    compareHash
};