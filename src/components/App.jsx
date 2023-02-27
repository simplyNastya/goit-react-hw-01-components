import Profile from './Profile/Profile';
import user from '../data/profile.json';

import Statistics from './Statistics/Statistics';
import statistics from '../data/statistics.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

// import TransactionHistory from './TransactionHistory/TransactionHistory';
// import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendList friends={friends} />
    </>
  );
};
