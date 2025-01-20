import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'
import Filter from '../Filter/Filter'

function Header ({ filterOpen, setFilterOpen }) {
    return (
        <header className="header">
            <span className="header__title">Snaps</span>
            <span>{filterOpen.toString()}</span>
            <div 
                className={`header__filter-button ${filterOpen ? "header__filter-button--active" : ""}`}
                onClick={() => setFilterOpen((prev) => !prev)}
            >
                <span className="header__filter">Filters</span>
                <img src={filterIcon} alt="filter menu"/>
            </div>
        </header>
    );
}

export default Header;