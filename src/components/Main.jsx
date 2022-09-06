import React from 'react'
import { useState } from 'react';
import Image from './Image';

export default function Main() {
    let [images, setimages] = useState([]);

    function searchImage(event) {
        images = [];
        setimages(images);
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        let search = data.get('search');
        console.log(search);

        fetch(`https://api.unsplash.com/search/photos?client_id=g-sZjhrW52xEcxqf9y05v1t_xTKlUh7iLtnaVXHbYkM&page=1&query=${search}`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.results.length; i++) {
                    images.push(data.results[i]);
                    console.log(data.results[i]);
                }
                setimages(images);
            })
            .catch(e => console.log(e));
    }
    return (
        <div className='container'>
            <form onSubmit={(e) => searchImage(e)}>
                <input type="text" id='search' name='search' />
                <button>Search</button>
            </form>
            <div className="images">
                {images.map(el => {
                    return <Image imagesrc={el.urls.raw} key={Math.random() * 100} />
                })}
            </div>
        </div>
    )
}
