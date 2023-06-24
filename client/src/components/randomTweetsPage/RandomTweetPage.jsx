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
      id: '21324258',
      username: 'MarthaStewart',
      css_id: 'martha',
      image: martha,
    },
    {
      id: '91478624',
      username: 'Forbes',
      css_id: 'forbes',
      image: forbes,
    },
    {
      id: '12',
      username: 'jack',
      css_id: 'jack',
      image: jack,
    },
    {
      id: '17471979',
      username: 'NatGeo',
      css_id: 'natgeo',
      image: natgeo,
    },
  ]

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`/api/twitter/accounts/${id}`)

      setrandomAccount(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchImageData = async (id) => {
    try {
      const nameAndImageResponse = await axios.get(
        `/api/twitter/profileImage/${id}`
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
        {userData.map((user) => {
          return (
            <div
              className="hover:blur-sm"
              onClick={() => {
                fetchData(user.id), fetchImageData(user.id)
              }}
            >
              <img
                id={user.css_id}
                className="rounded-circle shadow-4-strong"
                src={user.image}
                alt={user.username}
              />
            </div>
          )
        })}
      </div>
      <div id="grid">{display}</div>
    </>
  )
}

export default RandomTweetPage
