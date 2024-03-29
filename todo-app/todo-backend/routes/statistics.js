const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis/index');

router.get('/', async (req, res) => {
    const addedTodos = await getAsync('added_todos');
    res.send({ added_todos: +addedTodos });
});

module.exports = router;
