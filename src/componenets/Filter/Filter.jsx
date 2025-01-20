import './Filter.scss'
import tags from '../../data/tags.json'

export default function Filter({ activeFilter, setActiveFilter }) {

    const handleFilterClick = (tag) => {
        console.log(`${tag} clicked!!`);
        if (tag === activeFilter) {
            setActiveFilter(null);
        } else { 
            setActiveFilter(tag);
        }
    };

    return (
        <div className="filter">
            <div className="filter-text">Filters</div>
            <div className="filter-list">
                {tags.map((tag, index) => {
                    return (
                        <span 
                            key={index}
                            className={`filter-list__tags ${activeFilter === tag ? "filter-list__tags--active" : ""}`}
                            onClick={() => handleFilterClick(tag)}
                        >
                            {tag}
                        </span>
                    );
                }
            )}
            </div>
        </div>
    );
}