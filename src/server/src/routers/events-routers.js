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
    time: "12:30",
    location: "MC 1080",
    desc: "Come study Math ",
  },
  {
    eventName: "Basketball Game",
    time: "4:30",
    location: "PAC",
    desc: "Intramural basketball game",
  },
  {
    eventName: "Hockey Game",
    time: "10:30",
    location: "PAC",
    desc: "Intramural Hcokey game",
  } ,
  {
    eventName: "Exam",
    time: "9:30",
    location: "PAC",
    desc: "MATH 135 Final",
  }
]

router.get("/api", (req, res) => {
  res.send(eList)
});

router.post('/api', (req,res) => {
  eList.push(req.body)
  console.log(req)
  res.send(req)
  // console.log(req)
  alert(req.body)
})

router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build"));
});


export default router