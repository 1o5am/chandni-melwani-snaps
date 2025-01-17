import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'

function Header () {
    return (
        <header className="header">
            <h1 className="header__title">Snaps</h1>
            <div className="header__filter-button">
                <p className="header__filter">Filters</p>
                <img src={filterIcon} alt="filter menu"/>
            </div>
            


        </header>
    );
}

export default Header;