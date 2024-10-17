import express from 'express'
import cors from 'cors'
import ServerlessHttp from 'serverless-http'

const app = express()

app.use(express.json())
app.use(cors())

module.exports.handler = ServerlessHttp(app)

