import { Heading } from "./Heading";
import { Paragraph } from "../Paragraph/Paragraph";

export const HeadingParagraph = ({ primary, secondary, paragraphText }) => {
  return (
    <>
      <Heading primary={primary} secondary={secondary} />
      <Paragraph paragraphText={paragraphText} />
    </>
  );
};
