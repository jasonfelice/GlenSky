import Switch from './Switch';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
        <h2><a href="/">GlenSky</a></h2>
        <Switch />
    </header>
  );
};

export default Header;
