import css from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
