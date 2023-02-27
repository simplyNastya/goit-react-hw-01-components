import StatisticsItem from './StatisticsItem/StaticticsItem';
import PropTypes, { shape } from 'prop-types';
import './statistics.css';

const Statistics = ({ title, stats = [] }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <StatisticsItem key={id} label={label} percentage={percentage} />
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
