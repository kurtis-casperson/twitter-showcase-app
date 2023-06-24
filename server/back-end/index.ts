import express from 'express'
import { Express, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const PORT: number = 4321
const cors = require('cors')
const path = require('path')
require('dotenv').config()

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))

app.use(express.static(path.join(__dirname, '../../client/dist')))

app.get('/:route(Search|Random)', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'))
})

const headers: Object = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
  },
}

app.get(
  '/api/twitter/data/:searchInput',
  async (req: Request, res: Response) => {
    try {
      const { searchInput } = req.params
      const response = await axios.get(
        `https://api.twitter.com/2/tweets/search/recent/?query=${searchInput}&tweet.fields=public_metrics&expansions=author_id`,

        headers
      )

      const data = response.data.data

      response.data.meta.result_count > 0
        ? res.json(data)
        : res.status(500).json({ error: 'Internal server error' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
)

app.get('/api/twitter/accounts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/users/${id}/tweets?tweet.fields=public_metrics`,

      headers
    )

    const data = response.data.data

    let randomIndex = Math.floor(Math.random() * 10)
    let randomTweet = data[randomIndex]

    res.json(randomTweet)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.get(
  '/api/twitter/profileImage/:id',
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const response = await axios.get(
        `https://api.twitter.com/2/users/${id}?user.fields=profile_image_url,username`,

        headers
      )

      const data = response.data.data
      console.log('imageData', data)

      res.json(data)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
)
