
const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="feature-card">
    <div className="feature-card-icon">
      <Icon aria-hidden="true" />
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default ValueCard;
