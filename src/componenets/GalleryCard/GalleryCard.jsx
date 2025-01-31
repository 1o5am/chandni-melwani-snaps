import './GalleryCard.scss'
import { Link } from 'react-router-dom';


export default function GalleryCard ({ photo, tags }) {

    const photoTags = tags.filter((tag) => photo.tags.includes(tag.id));

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
                    {photo.tags.map((tag) => (
                            <span key={tag.id} className="gallery-card__tag">
                                {tag.name}
                            </span>
                    ))}
                </div>
                <Link 
                    to={{
                        pathname: `/photo/${photo.id}`,
                        state: { photo, tags: photoTags }   
                    }}
                >
                    <span className='gallery-card__view-button'>View</span>
                </Link>
            </div>
        </div>
    );
}