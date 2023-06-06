import { useState } from 'react'
import TweetBoxDisplay from '../TweetBoxDisplay'
import axios from 'axios'
import martha from '../../assets/martha.jpg'
import forbes from '../../assets/forbes.jpg'
import jack from '../../assets/jackD.jpg'
import natgeo from '../../assets/natgeo.jpg'
import './RandomTweetPage.css'
const RandomTweetPage = () => {
  const [randomAccount, setrandomAccount] = useState([])
  const [accountNameImage, setaccountNameImage] = useState({})
  const userData = [
    {
      MarthaStewart: '21324258',
      username: 'MarthaStewart',
    },
    {
      Forbes: '91478624',
      username: 'Forbes',
    },
    {
      jack: '12',
      username: 'jack',
    },
    {
      NatGeo: '17471979',
      username: 'NatGeo',
    },
  ]

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4321/twitter/accounts/${id}`
      )

      // const nameAndImageResponse = await axios.get(
      //   `http://localhost:4321/twitter/accounts/profileImage/${id}`
      // )

      // setaccountNameImage(nameAndImageResponse.data)
      // console.log('nameAndImageResponse', nameAndImageResponse.data)
      setrandomAccount(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const imageData = async (id) => {
    try {
      const nameAndImageResponse = await axios.get(
        `http://localhost:4321/twitter/profileImage/${id}`
      )

      setaccountNameImage(nameAndImageResponse.data)
      console.log('nameAndImageResponse', nameAndImageResponse.data)
    } catch (error) {
      console.error(error)
    }
  }

  imageData()

  let display

  display =
    randomAccount.length !== 0 ? (
      <TweetBoxDisplay
        tweet={randomAccount}
        accountNameImage={accountNameImage}
      />
    ) : null

  return (
    <>
      <h1 className="title">Popular Twitter Accounts</h1>
      <h3 className="title">Select Your Fav!</h3>

      <div className="twitter-icons cursor-pointer">
        <div
          className="hover:blur-sm"
          onClick={() => {
            fetchData(userData[0].MarthaStewart)
          }}
        >
          <img
            id="martha"
            className="rounded-circle shadow-4-strong"
            src={martha}
            alt="martha"
          />
        </div>
        <div
          className="hover:blur-sm"
          onClick={() => {
            fetchData(userData[1].Forbes)
          }}
        >
          <img
            id="forbes"
            className="rounded-circle shadow-4-strong"
            src={forbes}
            alt="forbes"
          />
        </div>
        <div
          className="hover:blur-sm"
          onClick={() => {
            fetchData(userData[2].jack)
          }}
        >
          <img
            id="jack"
            className="rounded-circle shadow-4-strong"
            src={jack}
            alt="jack"
          />
        </div>
        <div
          className="hover:blur-sm"
          onClick={() => {
            fetchData(userData[3].NatGeo)
          }}
        >
          <img
            id="natgeo"
            className="rounded-circle shadow-4-strong"
            src={natgeo}
            alt="natgeo"
          />
        </div>
      </div>

      <div id="grid">{display}</div>
      <div></div>
    </>
  )
}

export default RandomTweetPage
