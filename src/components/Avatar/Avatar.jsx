import css from './Avatar.module.css';

export const Avatar = ({ src, alt }) => (
  <div className={css.avatarFrame}>
    <div className={css.avatarWrapper}>
      <img className={css.avatar} src={src} alt={alt} />
    </div>
  </div>
);
