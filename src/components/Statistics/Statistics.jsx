import PropTypes from 'prop-types';
import { StatisticsData } from './StatisticsData/StatisticsData';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(stat => (
          <StatisticsData
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
