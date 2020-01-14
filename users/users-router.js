const express = require("express")
const Users = require("./users-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find()
    
    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
