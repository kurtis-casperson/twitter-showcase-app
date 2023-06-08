import { Nav } from 'react-bootstrap'
import './HomePage.css'
const HomePage = () => {
  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col m-5">
        <h1 className="font-arial font-black  bg-gradient-to-l from-blue-200 via-blue-500 to-black bg-clip-text text-center text-xl tracking-tighter text-transparent lg:text-7xl">
          Twitter Showcase App
        </h1>
      </div>
      <div className="mx-auto flex max-w-xl flex-col m-5">
        <h2 className=" text-center bg-clip-text font-medium tracking-wide ">
          Search Twitter for recent tweets on a particular topic, or view a
          random tweet from a popular twitter account!
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 mt-5 mb-10 ">
        <Nav.Link href={'/Search'}>
          <div className="card">
            <div className="cardDisplay flex flex-col items-center p-3">
              <div className="font-light mt-4">
                Search twitters most recent tweets by user name or keyword
              </div>
            </div>
          </div>
        </Nav.Link>
        <Nav.Link href={'/Random'}>
          <div className="card">
            <div className="cardDisplay flex flex-col items-center p-3">
              <div className="font-light mt-4">
                Get one random tweet from different twitter celebrities!
              </div>
            </div>
          </div>
        </Nav.Link>
      </div>
    </>
  )
}

export default HomePage
