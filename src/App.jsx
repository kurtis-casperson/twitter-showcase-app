import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/homePage/HomePage.jsx'
import SearchPage from './components/searchPage/SearchPage.jsx'
import RandomTweetPage from './components/randomTweetsPage/RandomTweetPage.jsx'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <>
      <div className={theme}>
        <NavBar toggleTheme={toggleTheme} theme={theme} />

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
