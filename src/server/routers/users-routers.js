import express from 'express'
import auth from '../middleware/auth.js'

const router = new express.Router()

router.get('/currentUser', (req, res) => {
  res.send({ currentUser: currentUser })
})

//Requests
// POST a new user to database
// PATCH user info
// DELETE user from db

const currentUser = {
  username: "Admin",
  email: "admin@admin.com",
  password: "admin"
}

export default router