import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import randomColor from './randomColor';

const Statistics = ({ title, stats = [] }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      style={{ backgroundColor: randomColor() }}
      className={styles.item}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
