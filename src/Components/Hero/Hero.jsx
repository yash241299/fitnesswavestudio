import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Section } from "./../Section/Section";
import { HeadingParagraph } from "./../Heading/HeadingParagraph";
import { PlayButton } from "./../Button/PlayButton";
import "./Hero.scss";

export const Hero = () => {
  return (
    <Section styleColor="">
      <Container>
        <div className="hero">
          <div className="hero-text-box">
            <HeadingParagraph
              primary="Sweat, Smile, Repeat: Your Fitness Journey Starts Here!"
              secondary="fitness studio wave"
              paragraphText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            quidem repellat cumque perferendis et vitae non, repellendus
            necessitatibus dolores."
            />
            <div className="hero-text-box__buttons">
              <Button
                contextName="Get Started &rarr;"
                styleName="btn-primary"
              />
              <PlayButton />
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/tabitha-turner-vuQP4z9B9Ac-unsplash.jpg"
              alt="Fitnerss Stusio Wave hero image"
              className="hero-img"
            ></img>
          </div>
        </div>
      </Container>
    </Section>
  );
};
