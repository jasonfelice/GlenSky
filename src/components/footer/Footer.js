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
              <i className={`${Styles.icon} ${Styles.openWeather}`} />
              OpenWeather
          </a>
          {'|'}
          <a rel="noreferrer" target="_blank" href="https://developers.google.com/maps/documentation/places/web-service/overview">
              <i className={`${Styles.icon} ${Styles.google}`} />
              Google Places API
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
