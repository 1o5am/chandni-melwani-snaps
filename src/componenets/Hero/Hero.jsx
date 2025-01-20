import './Hero.scss'

export default function Hero() {
    return (
        <div className="hero">
            <p className="hero__short-text">Our mission:</p>
            <h1 className="hero__long-text">Provide photographers a space to share photos of the neighborhoods they cherish,<span className='hero__long-text__italic'> expressed in their unique style</span>
            </h1>
        </div>
    );
}