const mongoUtils = require('../mongo');

const getUsers = async (req, res) => {
    const { userSeachString } = req.query;
    const db = mongoUtils.getDb();
    const usersDb = db.collection('users');

    const usersFound = await usersDb.find(
        {
            name: { $regex: userSeachString, $options: 'i' }
        }
    ).toArray();
    return usersFound;
}

module.exports = { getUsers }