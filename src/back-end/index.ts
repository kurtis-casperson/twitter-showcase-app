import express from 'express'
import { Express, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const PORT: number = 4321

const cors = require('cors')

app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))

app.get('/tweet/data/:searchInput', async (req: Request, res: Response) => {
  try {
    const { searchInput } = req.params
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent/?query=${searchInput}`,

      {
        headers: {
          Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAOgF9A%2Ff1SJN0O0utkX%2BNF%2B41TkM%3D5He51JIFSZ0dt3Do4oJM3dG7qu3XJ3Lqqych9p6olrbt016GTi`,
        },
      }
    )
    // const resp = await axios({
    //   method: 'GET',
    //   url: `https://api.twitter.com/2/tweets/search/recent/?query=${searchInput}`,
    //   headers: {
    //     Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAOgF9A%2Ff1SJN0O0utkX%2BNF%2B41TkM%3D5He51JIFSZ0dt3Do4oJM3dG7qu3XJ3Lqqych9p6olrbt016GTi`,
    //   },
    // })
    const data = response.data.data
    res.json(data)
    res.send(JSON.stringify(data.text))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
