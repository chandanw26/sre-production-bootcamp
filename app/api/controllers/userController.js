const pool = require('../config/db');
const logger = require('../config/logger');

exports.getUsers = async (req, res) => {
  try {
    logger.info("Users endpoint called");

    const result = await pool.query('SELECT NOW()');

    res.json({
      server_time: result.rows[0]
    });

  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: "Database error" });
  }
};
