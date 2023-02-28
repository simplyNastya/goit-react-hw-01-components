import PropTypes, { shape } from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import './friendList.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));
  return <ul className="friend-list">{elements}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
