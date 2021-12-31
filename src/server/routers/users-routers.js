import express from 'express'

const router = new express.Router()

router.get('/currentUser', (req, res) => {
  res.send({ currentUser: currentUser })
})

const currentUser = {
  username: "Admin",
  email: "admin@admin.com",
  password: "admin"
}

export default router