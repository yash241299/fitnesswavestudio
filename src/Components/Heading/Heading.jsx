import "./Heading.scss";
import { HeadingPrimary } from "./Sub-Component/HeadingPrimary";
import { HeadingSecondary } from "./Sub-Component/HeadingSecondary";

export const Heading = ({ primary, secondary }) => {
  return (
    <div className="heading">
      <HeadingSecondary headingText={secondary} />
      <HeadingPrimary headingText={primary} />
    </div>
  );
};
