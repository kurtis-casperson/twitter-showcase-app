import express from 'express'
import { Express, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const PORT: number = 4321

app.get('/tweet/data/:searchInput', async (req: Request, res: Response) => {
  try {
    const { searchInput } = req.params
    const Response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent/?query=${searchInput}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_bearer_token}`,
        },
      }
    )
    const data = Response.data
    res.json(data)
    res.send(JSON.stringify(data))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
