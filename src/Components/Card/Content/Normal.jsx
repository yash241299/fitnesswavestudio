import { Paragraph } from "./../../Paragraph/Paragraph";
import { HeadingTertiary } from "./../../Heading/Sub-Component/HeadingTertiary";

export const Normal = ({ headingText, paragraphText }) => {
  return (
    <>
      <HeadingTertiary text={headingText} />
      <Paragraph paragraphText={paragraphText} />
    </>
  );
};
