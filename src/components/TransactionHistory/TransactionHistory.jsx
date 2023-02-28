import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, type, amount, currency }) => (
    <TransactionItem key={id} type={type} amount={amount} currency={currency} />
  ));
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
