import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'


const router = express.Router()

router.post('/create', authMiddleware)

export default router