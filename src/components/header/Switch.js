import Style from './Switch.module.css';

const Switch = ({ theme, setTheme }) => {
  const handleChange = () => {
    if (theme === 'dark') setTheme('light');
    if (theme === 'light') setTheme('dark');
  };
  return (
  <div style={{display: 'flex', alignItems: 'center'}}>
    
    {
      // Set sun or moon icon based on selected theme
      (theme === 'light') ? (< i className={`${Style.icon} ${Style.sun}`} />) : (< i className={`${Style.icon} ${Style.moon}`} />)
    }
    <label className={Style.switch}>
      <input
        // Checked if theme is set to dark
        onChange={handleChange}
        checked={(theme === 'dark')}
        type="checkbox"
      />
      <span className={`${Style.round} ${Style.slider}`}></span>
    </label>
  </div>
  );
};

export default Switch;
