import './GalleryCard.sccs'

export default function GalleryCard ({ photo }) {
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
                    {photo.tags.map((tag, index) => {
                        return (
                            <span key={index} className="gallery-card__tag">
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}