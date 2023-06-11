'use client'

import { Twitter, Heart, Repeat } from 'react-bootstrap-icons'

const RandomTweetBoxDisplay = ({ tweet, accountNameImage }) => {
  return (
    <main>
      <div id="card" className="max-w-sm p-3 overflow-hidden">
        <div className="bg-blue-400 rounded-md">
          <div className="flex flex-row flex-nowrap justify-between">
            <div>
              <div className="translate-x-14 translate-y-1"></div>
            </div>
            <Twitter className="  translate-y-4  text-blue-600 " />
          </div>
          <div>
            <div className=" text-black pl-2 text-xs translate-x-14"></div>
            <img
              src={accountNameImage.profile_image_url}
              className=" absolute... rounded-lg "
            />
            <p className="font-extralight text-white p-2">
              {accountNameImage.username}
            </p>
            <p className="text-black text-sm p-2  leading-tight text-left italic">
              {tweet.text}
            </p>

            <div className="flex flex-row pt-3 my-px gap-x-10 leading-tight  p-2">
              <ul className="flex">
                <li className="flex">
                  <Heart className="text-lg text-red-600 translate-y-0.90 -translate-x-1" />
                  <span className="font-dark text-sm  text-red-600 ">
                    {tweet.public_metrics.like_count}
                  </span>
                </li>
              </ul>
              <ul className="flex">
                <li className="flex">
                  <Repeat className="text-lg text-white translate-y-0.95 -translate-x-1" />
                  <span className="font-light text-sm  text-white ">
                    {' '}
                    {tweet.public_metrics.retweet_count}
                  </span>
                </li>
              </ul>
              <ul className="flex">
                <li className="flex">
                  <span className="font-light text-xs"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RandomTweetBoxDisplay
