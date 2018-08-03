import bcrypt from 'bcryptjs';
import axios from 'axios';
export default (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/salt', { username }).then(({data: salt}) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                console.log(hash);
                resolve({ hash, salt });
            });
        }, error => {
            reject(error);
        })
    });
}