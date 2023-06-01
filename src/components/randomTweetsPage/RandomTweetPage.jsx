import { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import martha from '../../assets/martha.jpg'
import forbes from '../../assets/forbes.jpg'
import jack from '../../assets/jackD.jpg'
import natgeo from '../../assets/natgeo.jpg'
import './RandomTweetPage.css'
const RandomTweetPage = () => {
  const [randomTweet, setrandomTweet] = useState([])

  // const [tweetData, setTweetData] = useState(randomTweet)

  // function getRandomList(array, count) {
  //   const randomList = [];
  //   const length = array.length;

  //   // Ensure count is not greater than array length
  // dont think this is necessary. i think it will work without it
  //   count = Math.min(count, length);

  //   // Generate a random index and retrieve object
  //   while (randomList.length < length) {
  //     const randomIndex = Math.floor(Math.random() * length);
  //     randomList.push(array[randomIndex]);
  //   }

  //   return randomList;
  // }

  //   const getRandomTweet = () => {
  // const getTweet = Math.random(recent tweets)
  // setrandomTweet(getTweet)
  //   }

  // need to get a random id .. Math.random()
  // const userData = [
  //   {
  //     id: '17471979',
  //     name: 'National Geographic',
  //     username: 'NatGeo',
  //   },
  //   {
  //     id: '91478624',
  //     name: 'Forbes',
  //     username: 'Forbes',
  //   },
  //   {
  //     id: '21324258',
  //     name: 'Martha Stewart',
  //     username: 'MarthaStewart',
  //   },
  //   {
  //     id: '12',
  //     name: 'jack',
  //     username: 'jack',
  //   },
  // ]
  const dummydata = '17471979'

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4321/twitter/accounts/${dummydata}`
      )
      setrandomTweet(response.data.data)
      console.log(response.data.data)
      // setTweetData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
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
            fetchData()
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
      {/* <Button
        id="searchButton"
        type="button"
        variant="info"
        size="sm"
        onClick={() => {
          fetchData()
        }}
      >
        Search Tweets
      </Button> */}

      <div id="random-tweet-display">{randomTweet}</div>
      <div></div>
    </>
  )
}

export default RandomTweetPage
