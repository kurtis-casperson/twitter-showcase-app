/* eslint-disable no-debugger */
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
      const response = await axios.get(
        `http://localhost:4321/twitter/data/${searchInput}`
      )
      setTweetData(response.data)
      debugger
      console.log(response.data)
      console.log('errorMessage', errorMessage)
    } catch (error) {
      errorHandling(tweetData)
      console.log(tweetData)
      debugger
      console.error(error)
    }
  }
  // look for a key in the object that can be used to check
  const errorHandling = (searchInput) => {
    if (
      searchInput === undefined ||
      searchInput === null ||
      searchInput === '' ||
      searchInput.length === 0
    ) {
      setErrorMessage('oops..please enter a valid name or keyword')
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
            setErrorMessage('')
          }}
        >
          Search Tweets
        </Button>
      </div>
      <div id="grid">{searchResultArray}</div>
      <div id="errorMessage"> {errorMessage}</div>
    </>
  )
}

export default SearchPage
