import { TweetCard } from 'components/index';
import css from './TweetsList.module.css';
import users from '../../data/users.json';

export const TweetsList = () => {
  return (
    <ul className={css.tweetsList}>
      {users.map(user => (
        <TweetCard key={user.id} userData={user} />
      ))}
    </ul>
  );
};
