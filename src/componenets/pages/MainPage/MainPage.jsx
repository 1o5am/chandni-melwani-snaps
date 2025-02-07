import { useState } from "react";
import Filter from "../../Filter/Filter"
import GalleryList from "../../GalleryList/GalleryList";
import Hero from "../../Hero/Hero";

const base_URL = import.meta.env.VITE_API_URL ;

export default function Main({ filterOpen }) {

    const [activeFilter, setActiveFilter] = useState(null);


    return (
        <main className={`main $filterOpen ? 'main-page__filter-open' : ''`}>
            {filterOpen && (
                <Filter
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                />)
            }
            <Hero filterOpen={filterOpen} />
            <GalleryList activeFilter={activeFilter} />
        </main>    
    );
}