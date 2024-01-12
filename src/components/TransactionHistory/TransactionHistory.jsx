import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
