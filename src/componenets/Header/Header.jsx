import './Header.scss'
import filterIcon from '../../assets/images/Filter.svg'
import Filter from '../Filter/Filter'

function Header () {
    return (
        <header className="header">
            <span className="header__title">Snaps</span>
            <Filter />
        </header>
    );
}

export default Header;