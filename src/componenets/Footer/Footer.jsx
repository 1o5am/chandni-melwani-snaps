import './Footer.scss';
import  facebookIcon from '../../assets/images/facebook.svg';
import  instagramIcon from '../../assets/images/instagram.svg';
import  XIcon from '../../assets/images/X_twitter.svg';
import pinterestIcon from '../..//assets/images/Pinterest.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__title">Snaps</div>
                <div className="footer__links-one">
                    <div className="footer__link">For Photographers</div>
                    <div className="footer__link">Hire Talent</div>
                    <div className="footer__link">Inspiration</div>
                </div>
                <div className="footer__links-two">
                    <div className="footer__link">About</div>
                    <div className="footer__link">Careers</div>
                    <div className="footer__link">Support</div>
                </div>
                <div className="footer__social-media">
                    <img src={facebookIcon} alt="facebook icon" />
                    <img src={instagramIcon} alt="instagram icon" />
                    <img src={XIcon} alt="X icon" />
                    <img src={pinterestIcon} alt="pinterest icon" />
                </div>
                <div className="footer__copyright">
                    © 2024 Snaps
                    <div className="footer__link">Terms</div>
                    <div className="footer__link">Privacy</div>
                    <div className="footer__link">Cookies</div>
                </div>
            </div>
        </footer>
    );
}