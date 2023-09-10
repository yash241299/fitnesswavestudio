import "./Button.scss";

export const Button = ({ contextName, styleName }) => {
  return <button className={"btn " + styleName}>{contextName}</button>;
};
