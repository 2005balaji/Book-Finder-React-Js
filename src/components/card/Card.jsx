import React from 'react'
import './card.css'
function Card({ book }) {
    

    

    return (
        <>


            {book.map((item, i) => {

                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let authors = item.volumeInfo.authors
                let title = item.volumeInfo.title
                let link = item.volumeInfo.canonicalVolumeLink
            

                




                
                if (thumbnail != undefined) {
                    return (
                        <div key={item.id}>

                            <div className='card' >
                                <img id='Thumnail' src={thumbnail} alt="" />
                                <div className='details'>
                                    <div>
                                        <h4 className='bookTitle'>{title}</h4>
                                        <div className='authors'>
                                        {authors}
                                        </div>
                                    </div>
                                    <br />
                                    
                                   <a href={link} target="_blank"> <button id='learnMore'   >Learn More</button></a>
                                    <br />

                                </div>
                            </div>
                        </div>
                    )
                }

            })}
        </>
    )



}

export default Card