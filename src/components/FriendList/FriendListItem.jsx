import PropTypes from 'prop-types';
import { Item, IsOnline, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => (
  <Item>
    <IsOnline variant={isOnline} />
    <img src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
