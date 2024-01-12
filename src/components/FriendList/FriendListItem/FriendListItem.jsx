import PropTypes from 'prop-types';
import { FcApprove } from 'react-icons/fc';
import { FcDisapprove } from 'react-icons/fc';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status}>
          <FcApprove />
        </span>
      ) : (
        <span className={css.status}>
          <FcDisapprove />
        </span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
