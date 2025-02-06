import './GalleryCard.scss'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const base_URL = import.meta.env.VITE_API_URL ;


export default function GalleryCard ({ photo }) {

    return (
        <div className="gallery-card">
            <img 
                src={photo.photo}
                alt={photo.description}
                className='gallery-card__image'
            />
            <div className="gallery-card__details">
                <span className='gallery-card__photographer'>{photo.photographer}</span>
                <div className="gallery-card__tags">
                    {photo.tags.map((tag, index) => {
                        return (
                            <span key={tag.name || index} className="gallery-card__tag">
                                {tag}
                            </span>
                        );
                    })}
                 
                </div>
            </div>
        </div>
    );
}