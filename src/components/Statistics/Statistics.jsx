import PropTypes, { shape } from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, stats = [] }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
