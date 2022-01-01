import express from 'express'
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = new express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eList = [
  {
    eventName: "Study Session",
    date: new Date(),
    location: "MC 1080",
    isPublic: true,
    desc: "Come study Math ",
    participants: ["John", "Jacob"]
  },
  {
    eventName: "Basketball Game",
    date: new Date(),
    location: "PAC",
    isPublic: false,
    desc: "Intramural basketball game",
    participants: ["Joseph", "Ryan"]
  }
]

router.get('/allevents', (req, res) => {
  res.send({events: eList})
})

router.post('/allevents', (req,res) => {
  eList.push(req.body)
  res.send()
})

router.get('/userevents', (req,res) => {
  const user = req.user
})

export default router