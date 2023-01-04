import PropTypes from 'prop-types';
import { Transaction } from './Transaction.jsx';
import { Table, TableHead,TableHeadCell, Row, TableBody } from './TransactionHistory.styled.js';


export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <Row>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Currency</TableHeadCell>
      </Row>
    </TableHead>
    <TableBody>
      {items.map(item => (
        <Transaction
          key={item.id}
          amount={item.amount}
          currency={item.currency}
          type={item.type}
          transaction={item}
        />
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
