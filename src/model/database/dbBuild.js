const fs = require('fs');

const buildDatabase = () => {
  const connection = require('./dbConnection.js');
  const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

  connection.dbconnection.query(sql, (err, result) => {
    if (err) {
      console.log(err, 'error');
    } else {
      console.log('database created');
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
