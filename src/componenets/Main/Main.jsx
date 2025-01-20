import Filter from "../Filter/Filter"
import GalleryList from "../GalleryList/GalleryList";

export default function Main() {
    return (
        <main className="main">
            <Filter />
            <GalleryList />
        </main>    
    );
}