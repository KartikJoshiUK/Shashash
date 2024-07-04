require("dotenv").config();
module.exports = {
  db: {
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
  },
  secret: process.env.JWT_SECRET,
};
