import { useState } from "react";
import Filter from "../../Filter/Filter"
import GalleryList from "../../GalleryList/GalleryList";

const base_URL = import.meta.env.VITE_API_URL ;

export default function Main({ filterOpen }) {

    const [activeFilter, setActiveFilter] = useState(null);


    return (
        <main className="main">
            {filterOpen && (
                <Filter
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                />)
            }
            <GalleryList activeFilter={activeFilter} />
        </main>    
    );
}