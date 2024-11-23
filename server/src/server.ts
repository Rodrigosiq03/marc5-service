import express from 'express'
import cors from 'cors'
import ServerlessHttp from 'serverless-http'
import { envs } from './helpers/envs'
import { healthRouter } from './routers/health_router'
import { connectDB } from './database/connection'
import { HealthDocument, healthModel } from './database/models/health'

const app = express()

app.use(express.json())
app.use(cors())
app.use(healthRouter)



if (envs.STAGE !== 'test' && envs.STAGE !== 'dev') {
  const handler = async (event: any, context: any) => {
    return ServerlessHttp(app)
  }

  module.exports.handler = handler
  
} else {
  app.listen(3000, async () => {
    console.log('Server is running on port 3000')
  })
}
