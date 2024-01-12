import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
