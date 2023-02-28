import PropTypes from 'prop-types';
import styles from './transactionItem.module.css';

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={styles.tableRow}>
      <td className={styles.tableDataCell}>{type}</td>
      <td className={styles.tableDataCell}>{amount}</td>
      <td className={styles.tableDataCell}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
