import express from 'express'
import { Express, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const PORT: number = 4321
const cors = require('cors')
require('dotenv').config()

app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.get('/twitter/data/:searchInput', async (req: Request, res: Response) => {
  try {
    const { searchInput } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent/?query=${searchInput}&tweet.fields=public_metrics`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
        },
      }
    )

    const data = response.data.data

    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// can create new routes to get the profile pictures

app.get('/twitter/accounts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/users/21324258/tweets?tweet.fields=public_metrics`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
        },
      }
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

app.get('twitter/profileImage/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/users/21324258?user.fields=profile_image_url,username`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
        },
      }
    )

    const data = response.data
    console.log('imageData', data)
    console.log(response)
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
