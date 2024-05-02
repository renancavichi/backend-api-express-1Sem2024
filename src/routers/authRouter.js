import express from 'express'
import login from '../controllers/auth/login.js'
import logout from '../controllers/auth/logout.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/login', login)
router.post('/logout',auth, logout)

export default router