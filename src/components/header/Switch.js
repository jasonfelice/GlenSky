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
      (theme === 'light') ? (< i class={`${Style.icon} ${Style.sun}`} />) : (< i class={`${Style.icon} ${Style.moon}`} />)
    }
    <label className={Style.switch}>
      <input
        // Checked if theme is set to dark
        onChange={handleChange}
        checked={(theme === 'dark')}
        type="checkbox"
      />
      <span class={`${Style.round} ${Style.slider}`}></span>
    </label>
  </div>
  );
};

export default Switch;
