const db = require("../database/dbConfig")

function find() {
  return db("users")
    .select("id", "username")
}

function findBy(filter) {
  return db("users")
    .select("id", "username")
    .where(filter)
}

async function add(user) {
  const [id] = await db("users")
    .insert(user, "id")
 
  return findById(id)
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first()
}

module.exports = {
  add,
  find,
  findBy,
  findById,
}