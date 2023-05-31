import { useState } from 'react'
import axios from 'axios'
import martha from '../../assets/martha.jpg'
import forbes from '../../assets/forbes.jpg'
import jack from '../../assets/jackD.jpg'
import natgeo from '../../assets/natgeo.jpg'
import './RandomTweetPage.css'
const RandomTweetPage = () => {
  const [randomTweet, setrandomTweet] = useState([])

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
      <h3 className="title">Select Your Fav!</h3>

      <div className="twitter-icons cursor-pointer">
        <div
          className="hover:blur-sm"
          onClick={() => {
            console.log('click')
          }}
        >
          <img
            id="martha"
            className="rounded-circle shadow-4-strong"
            src={martha}
            alt="martha"
          />
        </div>
        <div className="hover:blur-sm">
          <img
            id="forbes"
            className="rounded-circle shadow-4-strong"
            src={forbes}
            alt="forbes"
          />
        </div>
        <div className="hover:blur-sm">
          <img
            id="jack"
            className="rounded-circle shadow-4-strong"
            src={jack}
            alt="jack"
          />
        </div>
        <div className="hover:blur-sm">
          <img
            id="natgeo"
            className="rounded-circle shadow-4-strong"
            src={natgeo}
            alt="natgeo"
          />
        </div>
      </div>

      <div id="random-tweet-display">{randomTweet}</div>
      <div></div>
    </>
  )
}

export default RandomTweetPage
