import { Button } from 'react-bootstrap'

const RandomTweetPage = () => {
  const [randomTweet, setrandomTweet] = useState([])

  //   const getRandomTweet = () => {
  // const getTweet = Math.random(recent tweets)
  // setrandomTweet(getTweet)
  //   }

  return (
    <>
      <h1 className="title">Popular Twitter Figures</h1>
      <div>
        <Button className="btn">
          <img
            id="button"
            className="rounded-circle shadow-4-strong"

            // src="./assets/martha.jpeg"
          />
        </Button>
      </div>
      <div id="random-tweet-display">{randomTweet}</div>
    </>
  )
}

export default RandomTweetPage
