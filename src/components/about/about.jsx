import React from 'react'
import './about.css'

function about() {
    return (
        <div className='about-info'>
            <h1 id='abt'>About Book Finder</h1>
            <div id='para'>
                Book Finder is a React app that allows users to search for books using the Google Books API. With Book Finder, users can search for books by title, author, or keyword, and the app will display a list of relevant results.

                One of the key features of Book Finder is its simplicity and ease of use. The app has a clean, intuitive interface that makes it easy for users to enter their search criteria and browse through the results. Additionally, the app displays detailed information about each book, including its title, author, publisher, and a summary of its contents.

                One of the benefits of using the Google Books API is that it provides access to a vast database of books, including both new releases and classic works. This means that users of Book Finder are able to find a wide range of books to suit their interests and needs.

                Overall, Book Finder is a powerful and user-friendly app that makes it easy for users to find and learn about new books. Whether you're a bookworm looking for your next great read or a researcher looking for reliable sources, Book Finder is an excellent tool to help you find what you're looking for.
            </div>

        </div>
    )
}

export default about
