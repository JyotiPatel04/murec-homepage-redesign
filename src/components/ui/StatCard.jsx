
const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <div className="stat-value">{value}</div>
    <p className="stat-label">{label}</p>
  </div>
);

export default StatCard;
