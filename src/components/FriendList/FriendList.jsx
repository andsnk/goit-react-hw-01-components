import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends &&
        friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
