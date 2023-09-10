import "./HeadingSecondary.scss";
export const HeadingSecondary = ({ headingText }) => {
  return (
    <h2 className="heading-secondary">
      <span className="heading-secondary__text">{headingText}</span>
      <span className="heading-secondary__line-effect"></span>
    </h2>
  );
};
