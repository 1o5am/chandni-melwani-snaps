import './GalleryCard.scss'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function GalleryCard ({ photo }) {

    console.log("Photo:", photo);
    console.log("Photo Tags:", photo?.tags);
    console.log("All Tags:", photo.tags);


    // const photoTags = photo.tags?.filter((tag) => photo?.tags?.includes(tag.id) || []);
    // const photoTags = photo.tags.filter((tag) => photo.tags.includes(tag.name));

    // const photoTags = photo.tags || []; // ✅ Use `photo.tags` directly

    console.log("PhotoTags before rendering:", photo.tags);

    return (
        <div className="gallery-card">
            <img 
                src={photo.photo}
                alt={photo.description}
                className='gallery-card__image'
            />
            <div className="gallery-card__details">
                <span className='gallery-card__photographer'>{photo.photographer}
                </span>
                <div className="gallery-card__tags">
                    <p>Tags Section:</p>
                    {photo.tags.map((tag, index) => {
                        return (
                            <span key={tag.name || index} className="gallery-card__tag">
                                {tag}
                            </span>
                        );
                    })}
                 
                </div>
                {/* <Link 
                    to={{
                        pathname: `/photo/${photo.id}`,
                        state: { photo, tags: photoTags }   
                    }}
                >
                    <span className='gallery-card__view-button'>View</span>
                </Link> */}
            </div>
        </div>
    );
}