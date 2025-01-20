import './Filter.scss'
import filterIcon from '../../assets/images/Filter.svg'

export default function Filter() {
    return (
        <div className="filter">
            <span className="filter__button">Filters</span>
            <img src={filterIcon} alt="filter menu"/>
        </div>
    );
}