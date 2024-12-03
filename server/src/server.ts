import express from 'express'
import cors from 'cors'
import ServerlessHttp from 'serverless-http'
import { envs } from './helpers/envs'
import { healthRouter } from './routers/health_router'
import { userRouter } from './routers/user_router'
import { fileRouter } from './routers/file_router'
import { classRouter } from './routers/class_router'

const app = express()

app.use(express.json())
app.use(cors())
app.use(healthRouter)
app.use(userRouter)
app.use(fileRouter)
app.use(classRouter)

if (envs.STAGE !== 'test' && envs.STAGE !== 'dev') {
  module.exports.handler = ServerlessHttp(app, {
    binary: ['multipart/form-data'],
  })
} else {
  app.listen(3000, async () => {
    console.log('Server is running on port 3000')
  })
}
