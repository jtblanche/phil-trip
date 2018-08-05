import axios from 'axios';

export default ({
    headers: {
        Authorization = null,
        ...headers
    } = {},
    ...options
}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return new Promise((resolve, reject) => {
        if (Authorization) {
            return reject("Cannot pass Authorization header manually.");
        }
        if (isAuthenticated) {
            axios({
                headers: {
                    Authorization: `Bearer ${isAuthenticated}`,
                    ...headers
                },
                ...options
            }).then(response => resolve(response.data), error => reject(error));
        } else {
            reject("User is currently not logged in.");
        }
    })
}