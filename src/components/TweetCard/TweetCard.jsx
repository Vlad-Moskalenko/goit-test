import css from './TweetCard.module.css';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { Logo, Button, Avatar, TweetMeta } from 'components';

export const TweetCard = ({ userData }) => {
  const { id, user, tweets, avatar, followers } = userData;

  const [isFollowing, setIsFollowing] = useLocalStorage(id, false);

  const handleFollow = () => setIsFollowing(!isFollowing);

  return (
    <li className={css.tweetWrapper}>
      <Logo />
      <Avatar src={avatar} alt={user} />
      <TweetMeta
        isFollowing={isFollowing}
        tweets={tweets}
        followers={followers}
      />
      <Button handleFollow={handleFollow} isFollowing={isFollowing} />
    </li>
  );
};
