import './Footer.scss';
import  facebookIcon from '../../assets/images/facebook.svg';
import  instagramIcon from '../../assets/images/instagram.svg';
import  XIcon from '../../assets/images/X_twitter.svg';
import pinterestIcon from '../..//assets/images/Pinterest.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__title-content-social-media">
                <div className="footer__title-content">
                    <div className="footer__title">
                        Snaps
                    </div>
                        <div className="footer__content">
                            <div className="footer__content-one">
                                <p className="footer__link">
                                    For Photographers
                                </p>
                                <p className="footer__link">
                                    Hire Talent
                                </p>
                                <p className="footer__link">
                                    Inspiration
                                </p>
                            </div>
                            <div className="footer__content-two">
                                <p className="footer__link">
                                    About
                                </p>
                                <p className="footer__link">
                                    Careers
                                </p>
                                <p className="footer__link">
                                    Support
                                </p>
                            </div>
                        </div>
                </div>
                <div className="footer__social-media">
                    <img src={facebookIcon} alt="facebook icon" />
                    <img src={instagramIcon} alt="instagram icon" />
                    <img src={XIcon} alt="X icon" />
                    <img src={pinterestIcon} alt="pinterest icon" />
                </div>
            </div>
            <div className="footer__copyright">
                    © 2024 Snaps
                    <div className="footer__link">Terms</div>
                    <div className="footer__link">Privacy</div>
                    <div className="footer__link">Cookies</div>
            </div>

        </footer>
    );
}