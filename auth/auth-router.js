const express = require("express")
const users = require("../users/users-model")

const router = express.Router()

router.post("/register", async (req, res, next) => {
  try {
    const saved = await users.add(req.body)
    
    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await users.findBy({ username }).first()

    if (user) {
      res.status(200).json({ message: `Welcome ${user.username}!` })
    } else {
      res.status(401).json({ message: "Invalid Credentials" })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
