import PropTypes from 'prop-types';
export const FriendListItem = ({ friend }) => {
  const { avatar: AVATAR, name, isOnline } = friend;
  return (
    <li className="item">
      {/* <span class={isOnline ? css.online : css.offline}></span> */}
      <span className="">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={AVATAR} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
