import express from 'express'
import { Express, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const PORT: number = 4321
const cors = require('cors')
require('dotenv').config()

app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))

app.get('/tweet/data/:searchInput', async (req: Request, res: Response) => {
  try {
    const { searchInput } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent/?query=${searchInput}`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
        },
      }
    )

    const data = response.data.data
    res.json(data)
    res.send(JSON.stringify(data.text))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// https://api.twitter.com/2/users/${userData.id}/tweets
// need to get a random id .. Math.random()
const userData = [
  {
    id: '17471979',
    name: 'National Geographic',
    username: 'NatGeo',
  },
  {
    id: '91478624',
    name: 'Forbes',
    username: 'Forbes',
  },
  {
    id: '21324258',
    name: 'Martha Stewart',
    username: 'MarthaStewart',
  },
  {
    id: '12',
    name: 'jack',
    username: 'jack',
  },
]

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
