import PropTypes from 'prop-types';
import css from './Stats.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Stats = ({ id, label, percentage }) => (
  <li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);

Stats.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
