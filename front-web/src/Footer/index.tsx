import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento <strong>Semana DevSuperior</strong>
      <div className="footer-icons">
        <a href="https://youtube.com" target="_new">
          <YouTubeIcon />
        </a>
        <a href="https://linkedin.com" target="_new">
          <LinkedInIcon />
        </a>
        <a href="https://instagram.com" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;