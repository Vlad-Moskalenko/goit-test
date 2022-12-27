import css from './TweetMeta.module.css';

export const TweetMeta = ({ tweets, isFollowing, followers, children }) => {
  const currentFollowers = isFollowing ? followers + 1 : followers;

  return (
    <div className={css.tweetMetaWrapper}>
      <ul className={css.tweetMeta}>
        <li>{tweets} tweets</li>
        <li>{currentFollowers.toLocaleString('en-US')} Followers</li>
      </ul>
      {children}
    </div>
  );
};
