import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerInfo}>
        <span>© GlenSky</span>
        <a rel="noreferrer" target="_blank" href="https://github.com/jasonfelice/GlenSky">
            <i className={`${Styles.icon} ${Styles.github}`} />
        </a>
      </div>
      <div className={Styles.footerInfo}>
        <span>Powered By:
            {' '}
        <a rel="noreferrer" target="_blank" href="https://openweathermap.org/api">
            OpenWeather
            <i className={`${Styles.icon} ${Styles.openWeather}`} />
        </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
