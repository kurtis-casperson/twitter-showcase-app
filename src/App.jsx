import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import RandomTweetPage from './components/RandomTweetPage'
import { Route, Switch, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1 className="title">Twitter Showcase App</h1>
      <NavBar>
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/Search" component={SearchPage} />
          <Route path="/Random" component={RandomTweetPage} />
        </Routes>
      </NavBar>
    </>
  )
}

export default App
