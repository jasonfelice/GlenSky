import Style from './Switch.module.css';

const Switch = () => {
  return (
  <>
    <label className={Style.switch}>
      <input type="checkbox" />
      <span class={`${Style.round} ${Style.slider}`}></span>
    </label>
  </>
  );
};

export default Switch;
