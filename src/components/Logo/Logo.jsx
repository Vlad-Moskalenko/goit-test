import css from './Logo.module.css';
import icons from '../../images/icons.svg';

export const Logo = () => (
  <div className={css.topCardWrapper}>
    <svg
      className={css.logo}
      width="88"
      height="26"
      aria-label="goit logo link"
    >
      <use href={icons + '#icon-logo'} />
    </svg>
  </div>
);
