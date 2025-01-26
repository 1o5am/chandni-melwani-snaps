import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'
import { useLocation, Link } from 'react-router-dom';

function Header ({ filterOpen, setFilterOpen }) {

    const isPhotoPage = useLocation().pathname.startsWith('/photo');

    return (
        <header className="header">
            <span className="header__title">Snaps</span>
            {isPhotoPage ? (
                <Link to="/" className="header__home-button">
                    Home
                </Link>
            ) : ( 
                <div 
                    className={`header__filter-button ${filterOpen ? "header__filter-button--active" : ""}`}
                    onClick={() => setFilterOpen((prev) => !prev)}
                > Filters
                    <img src={filterIcon} alt="filter menu"/>
                </div>
            )}
        </header>
    );
}

export default Header;