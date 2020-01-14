const express = require("express")
const usersModel = require("./users-model")

const router = express.Router()

function restricted() {
  return async (req, res, next) => {
    try {
      // authorize the user here
    } catch (err) {
      next(err)
    }
  }
}

router.get("/", async (req, res, next) => {
  try {
    const users = await usersModel.find()
    
    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
