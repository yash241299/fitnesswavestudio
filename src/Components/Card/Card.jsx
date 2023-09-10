import "./Card.scss";
export const Card = ({ children, bgColor }) => {
  return <div className={"card " + bgColor}>{children}</div>;
};
