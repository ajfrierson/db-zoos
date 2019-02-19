const express = require('express');
const helmet = require('helmet');
const knex = rquire('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development)

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
//list all zoos
sever.get('api/zoos', async (req, res) => {
  try {
    const zoos = await db('zoos')
    res.status(200).json(zoos);
  } catch (error) {
    res.status(500).json(error);
  }
});

//list zoos by id
server.get('./api/zooz/:id', async (req, res) => {
  try {
    const zoos = await db('zoos').where({ id: req.params.id });
    res.status(200).json(zoos); 
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
