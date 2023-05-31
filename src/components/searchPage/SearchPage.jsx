import { Button } from 'react-bootstrap'
import { useState } from 'react'
import TweetBoxDisplay from '../TweetBoxDisplay'
import axios from 'axios'
import './searchPage.css'
const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [tweetData, setTweetData] = useState([])

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4321/twitter/data/${searchInput}`
      )
      setTweetData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const searchResultArray = tweetData.map((tweet, index) => {
    return (
      <TweetBoxDisplay key={index} searchResult={searchResult} tweet={tweet} />
    )
  })

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
          value={searchInput}
          onChange={handleInputSearch}
        ></input>

        <Button
          id="searchButton"
          type="button"
          variant="info"
          size="sm"
          onClick={() => {
            fetchData(), setSearchInput('')
          }}
        >
          Search Tweets
        </Button>
      </div>
      <div id="grid">{searchResultArray}</div>
    </>
  )
}

export default SearchPage
