import css from './Button.module.css';

export const Button = ({ handleFollow, isFollowing }) => (
  <button
    onClick={handleFollow}
    className={`${css.followBtn} ${isFollowing && css.isFollowing}`}
    type="button"
  >
    {isFollowing ? 'following' : 'follow'}
  </button>
);
