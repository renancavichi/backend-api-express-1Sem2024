import express from 'express'
import listAll from '../controllers/user/listAll.js'
import getById from '../controllers/user/getById.js'
import create from '../controllers/user/create.js'
import update from '../controllers/user/update.js'
import remove from '../controllers/user/remove.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', auth, update)
router.delete('/:id', auth, remove)

export default router