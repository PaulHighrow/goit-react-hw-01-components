import PropTypes from 'prop-types';
import { Row } from './TransactionHistory.styled.js';
import { TableCell } from './Transaction.styled.js';

export const Transaction = ({ type, amount, currency }) => (
  <Row>
    <TableCell>{type}</TableCell>
    <TableCell>{amount}</TableCell>
    <TableCell>{currency}</TableCell>
  </Row>
);

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
