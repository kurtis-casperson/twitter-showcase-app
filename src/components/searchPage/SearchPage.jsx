import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import TweetBoxDisplay from '../TweetBoxDisplay'
import axios from 'axios'
import './searchPage.css'
const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value)
  }
  const [tweetData, setTweetData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`/tweet/data/${searchInput}`)
      setTweetData(response)
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  const tweetText = () => {
    const searchResultArray = tweetData.map((tweet, index) => {
      return (
        <TweetBoxDisplay
          key={index}
          searchResult={searchResult}
          tweet={tweet}
        />
      )
    })
    setSearchResult(searchResultArray)
  }

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
            fetchData(), tweetText(), setSearchInput('')
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
