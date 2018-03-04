require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const { SECRET } = process.env

const app = express()
app.use(cookieParser(SECRET))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(3000, () => console.log('Listening on port 3000'))
