import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import TweetBoxDisplay from '../TweetBoxDisplay'
import './searchPage.css'
const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  // const apiRequest = 'https://api.twitter.com/2/tweets/search/recent/?query='

  const dummydata = {
    data: [
      {
        edit_history_tweet_ids: ['1660756684367699969'],
        id: '1660756684367699969',
        text: 'RT @translatingTXT: 💛 kai!!!!!!!!! are you on weverse? i miss you\n\n🐧 yo hello~ \n\n@TXT_members @TXT_bighit \n#HUENINGKAI https://t.co/wrazURi…',
      },
      {
        edit_history_tweet_ids: ['1660756682094391296'],
        id: '1660756682094391296',
        text: "@Breaking_Battle @tedcruz @SilverBulletLLC @SamThePol @MichelleUgenti Hello Ted, la réponse à la liberté doit égal à la lutte contre la criminalité au Texas, Nikki Haley, en n'a rapporté des faits dans une vidéo et moi des conclusions Ted…\nA bientôt Ted",
      },
      {
        edit_history_tweet_ids: ['1660756681972936704'],
        id: '1660756681972936704',
        text: 'RT @shizukuorange: 20230520\n#TREASURE_HELLO_IN_HONGKONG\n#TREASURE #트레저 \n#요시 #ヨシ #YOSHI\n#박정우 #PARKJEONGWOO #パクジョンウ \n\n(*≧∀≦*)(*≧∀≦*) https://…',
      },
      {
        edit_history_tweet_ids: ['1660756681855229955'],
        id: '1660756681855229955',
        text: 'RT @strawbicing: hello kitty pumps https://t.co/eILSOnOaz9',
      },
      {
        edit_history_tweet_ids: ['1660756681393840130'],
        id: '1660756681393840130',
        text: 'RT @lovesickdoe: hello kitty cup https://t.co/oycxStxs6l',
      },
      {
        edit_history_tweet_ids: ['1660756684367699969'],
        id: '1660756684367699969',
        text: 'RT @translatingTXT: 💛 kai!!!!!!!!! are you on weverse? i miss you\n\n🐧 yo hello~ \n\n@TXT_members @TXT_bighit \n#HUENINGKAI https://t.co/wrazURi…',
      },
      {
        edit_history_tweet_ids: ['1660756682094391296'],
        id: '1660756682094391296',
        text: "@Breaking_Battle @tedcruz @SilverBulletLLC @SamThePol @MichelleUgenti Hello Ted, la réponse à la liberté doit égal à la lutte contre la criminalité au Texas, Nikki Haley, en n'a rapporté des faits dans une vidéo et moi des conclusions Ted…\nA bientôt Ted",
      },
    ],
  }

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value)
  }
  const [tweetData, setTweetData] = useState(dummydata)

  const tweetText = () => {
    // setTweetData will be set to the request query with the searchInput
    setTweetData(dummydata)
    const searchResultArray = tweetData.data.map((each, index) => {
      return (
        <TweetBoxDisplay key={index} searchResult={searchResult}>
          {each.text}
        </TweetBoxDisplay>
      )
    })
    setSearchResult(searchResultArray)
  }

  // when the button is pressed setSearchResult should contain the data from the dummydata object
  // map over dummy data. if searchinput === data then return
  return (
    <>
      <div>
        <h1>Search a topic or hobby you like</h1>
      </div>
      <div className="search-bar-container">
        <input
          id="searchBar"
          type="input"
          placeholder="Search any topic"
          name="searchBar"
          onChange={handleInputSearch}
        ></input>

        <Button
          id="searchButton"
          type="button"
          variant="info"
          size="sm"
          onClick={() => {
            tweetText(), setSearchInput('')
          }}
        >
          Search Tweets
        </Button>
      </div>
      <div id="grid">{searchResult}</div>
    </>
  )
}

export default SearchPage
