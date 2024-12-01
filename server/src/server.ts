import express from 'express'
import cors from 'cors'
import ServerlessHttp from 'serverless-http'
import { envs } from './helpers/envs'
import { healthRouter } from './routers/health_router'

const app = express()

app.use(express.json())
app.use(cors())
app.use(healthRouter)



if (envs.STAGE !== 'test') {
  module.exports.handler = ServerlessHttp(app, {
    binary: ['multipart/form-data'],
  })
} else {
  app.listen(3000, async () => {
    console.log('Server is running on port 3000')
  })
}
