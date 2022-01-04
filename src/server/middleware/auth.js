import jwt from 'jsonwebtoken'

const testUser = {
  name: "Test user",
  email: "test@gmail.com",
  password: "test"
}

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
    const user = testUser

    if(!user){
      throw new Error()
    }

    req.token = token
    req.user = user
    next()
  } catch(e) {
    res.status(401).send({error: 'Please authenticate'})
  }
  
}

export default auth