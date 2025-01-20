import photos from "../../data/photos.json"
import GalleryCard from "../GalleryCard/GalleryCard"
import "./GalleryList.scss"

export default function( {activeFilter} ) {

    // Filter photos based on the active filter
    const filteredPhotos = photos.filter((photo) => {
        // Return all photos if no filter is active
        if (!activeFilter) {
            return true;
        }
        // Check if the photo's tags array includes the activeFilter
        return photo.tags.includes(activeFilter);
    });


    return (
        <div className="gallery-list">
            {filteredPhotos.map((photo) => {
                return <GalleryCard key={photo.id} photo={photo} />;
            }
        )}
        </div>
    );
}