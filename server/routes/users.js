const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    { name:'ej', age: 26 },
    { name:'jh', age: 28 }
  ])
});

app.get('/users/:userId', (req, res) => {
  res.send(req.params)
})

module.exports = router;
