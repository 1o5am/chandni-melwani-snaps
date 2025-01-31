import './Hero.scss'
import { useLocation } from 'react-router-dom';

export default function Hero() {
    const location = useLocation();

    if (location.pathname.startsWith('/photo')) {
        return null;
    }
    return (
        <div className="hero">
            <p className="hero__short-text">Our mission:</p>
            <h1 className="hero__long-text">Provide photographers a space to share photos of the neighborhoods they cherish,<span className='hero__long-text__italic'> expressed in their unique style</span>
            </h1>
        </div>
    );
}