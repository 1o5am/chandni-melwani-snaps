import './Filter.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom'; 

const base_URL = import.meta.env.VITE_API_URL ;

export default function Filter({ activeFilter, setActiveFilter }) {

    const [tags, setTags] = useState([]);

    const handleFilterClick = (tag) => {
        console.log(`${tag} clicked!!`);
        if (tag === activeFilter) {
            setActiveFilter(null);
        } else { 
            setActiveFilter(tag);
        }
    };

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(`${base_URL}/tags`);
                setTags(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTags();
    }, []);

    return (
        <div className="filter">
            <div className="filter-text">Filters</div>
            <div className="filter-list">
                {tags && (
                    tags.map((tag, index) => {
                        return (
                            <span 
                                key={index}
                                className={`filter-list__tags ${activeFilter === tag ? "filter-list__tags--active" : ""}`}
                                onClick={() => handleFilterClick(tag)}
                            >
                                {tag}
                            </span>
                        );
                    })
                )}
            </div>
        </div>      
    )    
}


//     return (
//         <div className="filter">
//             <div className="filter-text">Filters</div>
//             <div className="filter-list">
//                 {tags.map((tag, index) => {
//                     return (
//                         <span 
//                             key={index}
//                             className={`filter-list__tags ${activeFilter === tag ? "filter-list__tags--active" : ""}`}
//                             onClick={() => handleFilterClick(tag)}
//                         >
//                             {tag}
//                         </span>
//                     );
//                 }
//             )}
//             </div>
//         </div>
//     );
// }