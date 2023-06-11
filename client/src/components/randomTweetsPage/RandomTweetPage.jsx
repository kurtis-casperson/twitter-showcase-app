import { useState } from 'react'
import RandomTweetBoxDisplay from '../RandomTweetBoxDisplay'
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

      setrandomAccount(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchImageData = async (id) => {
    try {
      const nameAndImageResponse = await axios.get(
        `http://localhost:4321/twitter/profileImage/${id}`
      )

      setaccountNameImage(nameAndImageResponse.data)
    } catch (error) {
      console.error(error)
    }
  }

  let display

  display =
    randomAccount.length !== 0 ? (
      <RandomTweetBoxDisplay
        tweet={randomAccount}
        accountNameImage={accountNameImage}
      />
    ) : null

  return (
    <>
      <h1 className="title">Popular Twitter Accounts. Select your fav!</h1>

      <div className="twitter-icons p-3 mb-5 cursor-pointer">
        <div
          className="hover:blur-sm"
          onClick={() => {
            fetchData(userData[0].MarthaStewart),
              fetchImageData(userData[0].MarthaStewart)
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
            fetchImageData(userData[1].Forbes)
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
            fetchImageData(userData[2].jack)
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
            fetchImageData(userData[3].NatGeo)
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
