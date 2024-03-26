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
        <div className={Styles.poweredBy}>
          <span>Powered By:</span>
          <a rel="noreferrer" target="_blank" href="https://openweathermap.org/api">
              OpenWeather
              <i className={`${Styles.icon} ${Styles.openWeather}`} />
          </a>
          <a rel="noreferrer" target="_blank" href="https://developers.google.com/maps/documentation/places/web-service/overview">
              Google Places API
              <i className={`${Styles.icon} ${Styles.openWeather}`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
