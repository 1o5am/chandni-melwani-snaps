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
                {photo && (
                    <div>
                        <img src={photo.photo} alt={photo.description} className="photo__image" />
                        <h3>{photo.photographer}</h3>
                    </div>
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