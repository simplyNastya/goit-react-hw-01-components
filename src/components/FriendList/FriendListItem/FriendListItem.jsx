import PropTypes, { shape } from 'prop-types';
import './friendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const online = isOnline ? 'status active' : 'status';
  return (
    <li className="item">
      <span className={online}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
