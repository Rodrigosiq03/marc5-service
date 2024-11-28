import express from 'express'
import cors from 'cors'
import ServerlessHttp from 'serverless-http'
import { envs } from './helpers/envs'
import { healthRouter } from './routers/health_router'
import { userRouter } from './routers/user_router'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
app.use(healthRouter)



if (envs.STAGE !== 'test') {
  module.exports.handler = ServerlessHttp(app)
} else {
  app.listen(3000, async () => {
    console.log('Server is running on port 3000')
  })
}
