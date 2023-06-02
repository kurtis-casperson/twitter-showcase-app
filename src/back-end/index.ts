import express from 'express'
import { Express, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const PORT: number = 4321
const cors = require('cors')
require('dotenv').config()

app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))

app.get('/twitter/data/:searchInput', async (req: Request, res: Response) => {
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

app.get('/twitter/accounts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/users/${id}/tweets`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
        },
      }
    )

    const data = response.data
    res.json(data)
    // res.send(JSON.stringify(data))
    console.log(data.data)
    console.log('data.data')

    for (const id in data.data) {
      const secondRes = await axios.get(
        `https://api.twitter.com/2/tweets?ids=${id}&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
          },
        }
      )

      const tweetData = secondRes.data
      // res.json(tweetData)
      // res.send(JSON.stringify(data))
      console.log(tweetData.data)
      console.log('tweetData.data')
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
