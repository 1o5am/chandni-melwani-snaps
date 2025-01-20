import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'
import Filter from '../Filter/Filter'

function Header () {
    return (
        <header className="header">
            <span className="header__title">Snaps</span>
            <div className="header__filter-button">
                <span className="header__filter">Filters</span>
                <img src={filterIcon} alt="filter menu"/>
            </div>
        </header>
    );
}

export default Header;