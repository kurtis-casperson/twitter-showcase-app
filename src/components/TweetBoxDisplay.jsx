'use client'

import { Twitter, Heart, Repeat } from 'react-bootstrap-icons'

const TweetBoxDisplay = ({ tweet }) => {
  return (
    <main>
      <div id="card" className="max-w-sm overflow-hidden">
        <div className="flex flex-row flex-nowrap justify-between">
          <div>
            <div className="translate-x-14 translate-y-1"></div>
          </div>
          <Twitter className="translate-y-12 text-blue-600" />
        </div>

        <div className="bg-blue-400 rounded-md">
          <div>
            <div className="pt-1 text-black text-xs translate-x-14"></div>
            <p className="font-extralight leading-tight text-left text-white p-2">
              Hello
            </p>
            <p className="text-black text-sm italic">{tweet.text}</p>
            <img className="p-2" />

            <div className="flex flex-row items-center gap-x-10 justify-right p-10">
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

export default TweetBoxDisplay
