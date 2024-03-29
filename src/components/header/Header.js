import Switch from './Switch';
import Styles from './Header.module.css';

const Header = ({ theme, setTheme }) => {
  return (
    <header className={Styles.header}>
        <h2><a href="/">GlenSky</a></h2>
        <Switch theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
