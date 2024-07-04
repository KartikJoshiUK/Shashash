const pool = require('../config/db.js');

const Favorite = {
  async create(userId, jokeUrl) {
    const [result] = await pool.query('INSERT INTO favorites (user_id, joke_url) VALUES (?, ?)', [userId, jokeUrl]);
    return result.insertId;
  },

  async findByUserId(userId) {
    const [rows] = await pool.query('SELECT * FROM favorites WHERE user_id = ?', [userId]);
    return rows;
  },

  async delete(id) {
    await pool.query('DELETE FROM favorites WHERE id = ?', [id]);
  }
};

module.exports = Favorite;
