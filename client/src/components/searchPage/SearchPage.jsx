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

  const fetchData = async () => {
    const validateSearch = (searchInput) => {
      if (
        searchInput === undefined ||
        searchInput === null ||
        searchInput === '' ||
        searchInput.length === 0
      ) {
        setErrorMessage('Please enter a valid name or keyword')
        return false
      }
    }
    validateSearch(searchInput)

    try {
      const response = await axios.get(`/api/twitter/data/${searchInput}`)

      setTweetData(response.data)
    } catch (error) {
      if (error) {
        setErrorMessage('oops! Try a new search')
      }
      console.error(error)
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
        <h1 className="title">Search a topic or popular person</h1>
      </div>

      <div className="text-3xl p-3 font-bold text-red-700">{errorMessage}</div>

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
            fetchData()
            setSearchInput('')
            setErrorMessage('')
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
