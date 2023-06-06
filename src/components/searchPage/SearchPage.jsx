import { Button } from 'react-bootstrap'
import { useState } from 'react'
import SearchTweetBoxDisplay from '../SearchTweetBoxDisplay'
import axios from 'axios'
import './searchPage.css'

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [tweetData, setTweetData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const fetchData = async (errorHandling) => {
    try {
      const response = await axios.get(
        `http://localhost:4321/twitter/data/${searchInput}`
      )
      setTweetData(response.data)

      errorHandling(response.data, searchInput)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const errorHandling = (tweetData, searchInput) => {
    if (
      tweetData === undefined ||
      tweetData === null ||
      tweetData === '' ||
      tweetData.length === 0 ||
      searchInput === undefined ||
      searchInput === null ||
      searchInput === '' ||
      searchInput.length === 0
    ) {
      setErrorMessage('Please select a name or keyword and press search')
    }
  }

  const searchResultArray = tweetData.map((tweet, index) => {
    return (
      <SearchTweetBoxDisplay
        key={index}
        searchResult={searchResult}
        tweet={tweet}
      />
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
            fetchData(errorHandling)
            setSearchInput('')
          }}
        >
          Search Tweets
        </Button>
      </div>
      <div id="grid">{searchResultArray}</div>
      <div className="font-light mt-9 max-w-sm"> {errorMessage}</div>
    </>
  )
}

export default SearchPage
