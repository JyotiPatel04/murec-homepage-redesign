
const SectionHeading = ({ eyebrow, title, id, titleClassName = '' }) => (
  <>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 id={id} className={titleClassName}>
      {title}
    </h2>
  </>
);

export default SectionHeading;
