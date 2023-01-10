import React, { useState } from 'react'
import './main.css'
import Card from '../card/Card'
import axios from 'axios'


function Main() {

  const [search, setSearch] = useState("")
  const [bookData, setData] = useState([])
  const [error, setError] = useState(1)


  const searchBook = (ele) => {
    if (ele.key === "Enter") {

      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyChfmL2UC1opDUGjlpOZwr3UEnzGAI94Tc' + '&maxResults=40')

        .then(res => {
          if (res.data.totalItems != 0) {
            setData(res.data.items)
            setError("")
          }
          else {
            setError(res.data.totalItems)
          }

        })
        .catch(err => console.log(err))
    }
  }
 

  



  return (

    
    <>

      <div className='navigation-bar'>


        <div className='centre-div'>

          <h1> <span className='welcome'> Welcome to BookFinder</span> <br /><br /> Find your next great read here!</h1>

          <div className='search-box'>
            <input type="text" id='search-input' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} placeholder='Search your favorite book' />
          </div>


        </div>



      </div>

      {error === 0 ?

        <h1>
          No books found for the search
        </h1>

        :  <div className='container'>
          {
            <Card book={bookData} />
          }
        </div>}





    </>
  )
}

export default Main