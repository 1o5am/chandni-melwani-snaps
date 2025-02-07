import { useState } from "react";
import Filter from "../../Filter/Filter"
import GalleryList from "../../GalleryList/GalleryList";
import Hero from "../../Hero/Hero";

const base_URL = import.meta.env.VITE_API_URL ;

export default function Main({ filterOpen }) {

    const [activeFilter, setActiveFilter] = useState(null);


    return (
        <div className={"main-page"}>
            <div className="main-page__filter">
                {filterOpen && (
                    <Filter
                            activeFilter={activeFilter}
                            setActiveFilter={setActiveFilter}
                    />)
                }
            </div>
            <div className="main-page__hero-gallery">
                <Hero className={`main-page__hero ${filterOpen ? 'main-page__hero-filter-open' : ''}`}/>
                <GalleryList activeFilter={activeFilter} />
            </div>
        </div>    
    );
}