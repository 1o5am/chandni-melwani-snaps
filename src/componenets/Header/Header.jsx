import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'

function Header ({ filterOpen, setFilterOpen }) {
    return (
        <header className="header">
            <span className="header__title">Snaps</span>
            <span>{filterOpen.toString()}</span>
            <div 
                className={`header__filter-button ${filterOpen ? "header__filter-button--active" : ""}`}
                onClick={() => setFilterOpen((prev) => !prev)}
            >Filters
                <img src={filterIcon} alt="filter menu"/>
            </div>
        </header>
    );
}

export default Header;