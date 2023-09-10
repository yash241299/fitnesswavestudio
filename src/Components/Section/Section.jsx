import "./Section.scss";
export const Section = ({ children, styleColor }) => {
  return <section className={"section " + styleColor}>{children}</section>;
};
