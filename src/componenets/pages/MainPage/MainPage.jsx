import { useState } from "react";
import Filter from "../../Filter/Filter"
import GalleryList from "../../GalleryList/GalleryList";

const API_KEY = "3311a5bf-592d-4c57-8cab-0478f94be322"

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