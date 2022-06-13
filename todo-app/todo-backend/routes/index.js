const express = require('express');
const { Todo } = require('../mongo')
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  
  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  // const todos = await Todo.find({})
  // await redis.setAsync("added_todos", todos.length)

  const count = await redis.getAsync("added_todos")
  res.send({
    "added_todos": count
  })
})

module.exports = router;
