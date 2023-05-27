import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/homePage/HomePage.jsx'
import SearchPage from './components/searchPage/SearchPage.jsx'
import RandomTweetPage from './components/randomTweetsPage/RandomTweetPage.jsx'
import { Route, Routes } from 'react-router-dom'
function App({ theme }) {
  return (
    <>
      <div className={theme}>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Random" element={<RandomTweetPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
