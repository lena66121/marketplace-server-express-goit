const usersList = require('../../db/users/all-users.json');

const userId = (req, res) => {
    const id = req.params.id;

    const user = usersList.find(user => user.id === id);

    if (user) return res.status(200).json({status: 'success', user});
    else return res.status(200).json({status: 'not found'});
}

module.exports = userId;