import './Filter.scss'
import tags from '../../data/tags.json'

export default function Filter() {

    const handleFilterClick = (tag) => {
        console.log(`${tag} clicked!!`);
    }

    return (
        <div className="filter-list">
            {tags.map((tag, index) => {
                return (
                    <span 
                        key={index}
                        className="filter-list__tags"
                        onClick={() => handleFilterClick(tag)}
                    >
                        {tag}
                    </span>
                );
            }
        )}


        </div>
    );
}