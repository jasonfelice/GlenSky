import Style from './Switch.module.css';

const Switch = () => {
  return (
  <div style={{display: 'flex', alignItems: 'center'}}>
    < i class={`${Style.icon} ${Style.sun}`} />
    <label className={Style.switch}>
      <input type="checkbox" />
      <span class={`${Style.round} ${Style.slider}`}></span>
    </label>
  </div>
  );
};

export default Switch;
