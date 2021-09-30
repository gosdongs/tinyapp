/**
 * Get user that owns email
 * @param {string} email 
 * @param {object} database 
 * @returns {object}
 */
const getUserByEmail = (email, database) => {
  for (const user in database) {
    if (database[user].email === email) {
      return database[user];
    }
  }

  return undefined;
};

module.exports = { getUserByEmail };