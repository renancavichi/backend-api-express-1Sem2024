//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import authRouter from './routers/authRouter.js'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import logger from './middlewares/logger.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(logger)
app.use(cookieParser())
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8081', 'http://meusite.com'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})


