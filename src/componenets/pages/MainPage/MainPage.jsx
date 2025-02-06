import { useState } from "react";
import Filter from "../../Filter/Filter"
import GalleryList from "../../GalleryList/GalleryList";

const API_KEY = import.meta.env.API_KEY;

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