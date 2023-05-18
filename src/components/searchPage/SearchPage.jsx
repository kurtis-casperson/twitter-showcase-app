import { Button } from 'react-bootstrap'

const SearchPage = () => {
  const handleInputSearch = () => {}

  return (
    <>
      <div className="search-bar-container">
        <input
          id="searchBar"
          type="input"
          placeholder="Search by name"
          name="searchBar"
          value="enter text"
          onChange={handleInputSearch}
        ></input>

        <Button
          id="searchButton"
          type="button"
          variant="info"
          size="sm"
          onClick={() => {}}
        >
          Search Tweets
        </Button>
      </div>
    </>
  )
}

export default SearchPage
