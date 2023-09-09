import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ friend }) => {
  const { avatar: AVATAR, name, isOnline } = friend;
  return (
    <li className={css.item}>
      <span class={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={AVATAR} alt={name} width="48" />
      <p className={css.name}>{name}</p>
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
