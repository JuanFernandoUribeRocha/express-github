const { Pool } = require('pg');

const pool = new Pool({
  user: 'uribe_rocha',
  host: 'localhost',
  database: 'react_express_db',
  password: 'uribe_rocha',
  port: 5432,
});

module.exports = pool;
