import { Button } from 'react-bootstrap'
import { useState } from 'react'
import martha from '../../assets/martha.jpg'
import forbes from '../../assets/forbes.jpg'
import ramsay from '../../assets/ramsay.jpg'
import natgeo from '../../assets/natgeo.jpg'
import './RandomTweetPage.css'
const RandomTweetPage = () => {
  const [randomTweet, setrandomTweet] = useState([])

  //   const getRandomTweet = () => {
  // const getTweet = Math.random(recent tweets)
  // setrandomTweet(getTweet)
  //   }

  // const [tweetData, setTweetData] = useState(randomTweet)

  // const tweetText = () => {
  //   // setTweetData will be set to the request query with the searchInput
  //   setTweetData(dummydata)
  //   const searchResultArray = tweetData.data.map((each, index) => {
  //     return <TweetBoxDisplay key={index}>{each.text}</TweetBoxDisplay>
  //   })
  //   setSearchResult(searchResultArray)
  // }

  return (
    <>
      <h1 className="title">Popular Twitter Accounts</h1>

      <div className="twitter-icons">
        <img
          id="martha"
          className="rounded-circle shadow-4-strong"
          src={martha}
          alt="martha"
        />
        <img
          id="forbes"
          className="rounded-circle shadow-4-strong"
          src={forbes}
          alt="forbes"
        />{' '}
        <img
          id="ramsay"
          className="rounded-circle shadow-4-strong"
          src={ramsay}
          alt="ramsay"
        />{' '}
        <img
          id="natgeo"
          className="rounded-circle shadow-4-strong"
          src={natgeo}
          alt="natgeo"
        />
      </div>

      <div id="random-tweet-display">{randomTweet}</div>
      <div></div>
    </>
  )
}

export default RandomTweetPage
