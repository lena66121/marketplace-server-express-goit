const fs = require('fs');
const usersList = require('../../db/users/all-users.json');
const pathToFile = '../marketplace-server-goit/src/db/users/all-users.json';

const usersRoute = (req, res) => {

    const responseObj = {
        status: "success",
        user: req.body,
    }

    fs.readFile(pathToFile, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        } else {
            usersList.push(req.body);
            fs.writeFile(pathToFile, JSON.stringify(usersList), err => {throw err})
        }
    });

    res
        .status(200)
        .json(responseObj);
};

module.exports = usersRoute;