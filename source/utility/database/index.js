const postgres = require('pg');
const log = require('../logs');

const DB = new postgres.Client({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432
});

exports.connect = async () => {
  await DB.connect(async err => {
    if (err) await log.error('Database Connection Error', err.message);
    else await log.info('Database Connected!');
  });
}

exports.query = (sql, queryParams, options) => {
  return new Promise (async (resolve, reject) => {
    // Run the pg query
    DB.query(sql, queryParams, (err, res) => {
      if (err) reject(err);
      if (options?.parseOutput && res.rows.length) {
        let firstKey = Object.keys(res.rows[0])[0];
        let parsed = JSON.parse(res.rows[0][firstKey]);
        if (parsed.err) reject(parsed.err)
        else resolve(parsed);
      } else {
        if (res && res.rowCount > 1) resolve(res.rows);
        resolve(res && res.rows ? res.rows[0] : res);
      }
    });
  })
}
