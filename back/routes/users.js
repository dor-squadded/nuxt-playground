const userController = require('../controllers/users')
const express = require('express');
const router = express.Router();

// define the home page route
router.post('/', async (req, res) => {
    const data = await userController.getUsers(req);
    res.json(data)
});

module.exports = router;