import './Filter.scss'
// import tags from '../../data/tags.json'
// get data from api
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom'; 

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
                const response = await axios.get('https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=3311a5bf-592d-4c57-8cab-0478f94be322');
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