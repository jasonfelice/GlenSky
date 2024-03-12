import Switch from './Switch';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
        <span>GlenSky</span>
        <Switch />
    </header>
  );
};

export default Header;
