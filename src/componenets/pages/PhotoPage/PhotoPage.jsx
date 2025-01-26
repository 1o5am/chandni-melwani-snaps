import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = "3311a5bf-592d-4c57-8cab-0478f94be322"

export default function PhotoPage() {

    const { photoId } = useParams();

    const [photo, setPhoto] = useState(null);

    const fetchPhoto = async (id) => {
        try {
            const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=${API_KEY}`);
            console.log(response.data);
            setPhoto(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPhoto(photoId);
    }, [photoId]);

    return(
        <main className="photo-page">
            <div className="photo__container">

                <h1 className="photo__title"></h1>
                {photo && (
                    <article className="photo__description-container">
                        <img src={photo.urls.regular} alt={photo.description} />
                    <p className="photo__description">{photo.description}</p>
                    </article>
                )}
                <img />
                <div className="photo__tags">
                    <button className="photo__tag"></button>
                    <button className="photo__tag"></button>
                    <button className="photo__tag"></button>
                </div>
                <div className="photo__likes-photographer-date">
                    <div className="photo__likes-date">
                        <p className="photo__like"></p>
                        <p className="photo__date"></p>
                    </div>
                    <p className="photo__photographer">Photo by: </p>
                </div>
            </div>

        </main>
    )
}