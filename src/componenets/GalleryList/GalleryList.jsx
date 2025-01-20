import photos from "../../data/photos.json"
import GalleryCard from "../GalleryCard/GalleryCard"

export default function GalleryList({activeFilter}) {

    // Functionality to show list if filter is not clicked on. If clicked on show list of photos from tag. If not clicked on or clicked on tag again, show all photos.
    let filteredPhotos = photos.filter((photo) => {
        if (activeFilter === null) {
            return true;
        } else if (photo.tag === activeFilter) {
            return true;
        }
    });

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