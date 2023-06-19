import css from '../TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th className={css.headCell}>Type</th>
          <th className={css.headCell}>Amount</th>
          <th className={css.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.bodyString} key={id}>
              <td className={css.bodyCell}>{type}</td>
              <td className={css.bodyCell}>{amount}</td>
              <td className={css.bodyCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
