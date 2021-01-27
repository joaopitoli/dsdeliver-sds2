import './styles.css'
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por João Pitoli durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">

                <a href="https://youtube.com.br" target="_new">
                    <YoutubeIcon />
                </a>

                <a href="https://www.linkedin.com/in/joao-paulo-oliveira-pitoli/" target="_new">
                    <LinkedinIcon />
                </a>

                <a href="https://instagram.com.br" target="_new">
                    <InstagramIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;