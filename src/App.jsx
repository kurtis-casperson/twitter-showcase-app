import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/homePage/HomePage.jsx'
import SearchPage from './components/searchPage/SearchPage.jsx'
import RandomTweetPage from './components/randomTweetsPage/RandomTweetPage.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  // add a darkmode option.  When it is night time, darkmode is enabled, otherwise light mode
  // or add a light mode toggle

  // const styles = {
  //   backgroundColor: props.darkMode ? '#222222' : '#cccccc', // You code here
  // }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Random" element={<RandomTweetPage />} />
      </Routes>
    </>
  )
}

export default App
