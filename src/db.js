const { Pool } = require("pg");

// const connectionString = process.env.PG_CONNECTIONSTRING;
const connectionString = PG_CONNECTIONSTRING="postgres://xsiswlto:iqMhA5Q4RU5OCxTYl4J3G1j4hCG3gLkK@kandula.db.elephantsql.com/xsiswlto";

const pool = new Pool({
  //   user: "userxyz",
  //   host: "xyz",
  //   database: "xyz",
  //   password: "password",
  //   port: 5432,
  connectionString,
});

module.exports = pool;
