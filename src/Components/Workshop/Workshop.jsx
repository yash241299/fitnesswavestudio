import "./Workshop.scss";
import { Section } from "./../Section/Section";
import { Container } from "./../Container/Container";
import { HeadingParagraph } from "../Heading/HeadingParagraph";
import { Button } from "../Button/Button";

const VideoComponent = ({ videoUrl }) => {
  return (
    <iframe
      src={videoUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export const Workshop = () => {
  return (
    <Section styleColor="">
      <Container>
        <div className="workshop">
          <div className="workshop--main">
            <div className="workshop--main__text">
              <HeadingParagraph
                primary="Discover What's Next: Our Upcoming Fitness Workshops"
                secondary="Upcoming workshop"
                paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

              <div className="workshop--main__button">
                <Button contextName="Join Now" styleName="btn-primary" />
                <a href="#" className="workshop--main__link">
                  See More &rarr;
                </a>
              </div>
            </div>

            <div className="workshop--main__video">
              <VideoComponent videoUrl="https://www.youtube.com/embed/uHz2ng84hFE" />
            </div>
          </div>
          <div className="workshop--secodary"></div>
        </div>
      </Container>
    </Section>
  );
};
