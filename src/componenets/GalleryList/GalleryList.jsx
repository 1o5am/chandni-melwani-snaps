import photos from "../../data/photos.json"
import GalleryCard from "../GalleryCard/GalleryCard"
import "./GalleryList.scss"

export default function() {

    return (
        <div className="gallery-list">
            {photos.map((photo) => {
                return (
                    <GalleryCard key={photo.id} photo={photo} />
                );
            }
        )}
        </div>
    );
}