import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'
import { useLocation, Link } from 'react-router-dom';
import arrowIcon from '../../assets/images/Arrow.svg'

function Header ({ filterOpen, setFilterOpen }) {

    const isPhotoPage = useLocation().pathname.startsWith('/photo');

    return (
        <header className="header">
            <Link to="/">
                <span className="header__title">Snaps</span>
            </Link>
            {isPhotoPage ? (
                <Link to="/" className="header__home-button">
                    <img src={arrowIcon} alt="arrow icon" className='header__home-button--icon'/>
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