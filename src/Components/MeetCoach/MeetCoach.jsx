import "./MeetCoach.scss";
import { Section } from "./../Section/Section";
import { Container } from "./../Container/Container";
import { HeadingParagraph } from "./../Heading/HeadingParagraph";
import { Button } from "./../Button/Button";
import { Card } from "../Card/Card";
import { HeadingTertiary } from "../Heading/Sub-Component/HeadingTertiary";
import { CardItem } from "../Card/Content/CardItem";

export const MeetCoach = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="main-items">
          {[
            {
              src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
              alt: "Trainer Image",
              trainerType: "Yoga Trainer",
            },
            {
              src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
              alt: "Trainer Image",
              trainerType: "Yoga Trainer",
            },
          ].map((val, idx) => {
            return (
              <Card key={idx} bgColor="card-white">
                <CardItem
                  src={val.src}
                  alt={val.alt}
                  trainerType={val.trainerType}
                />
              </Card>
            );
          })}

          <div className="main-items__heading">
            <HeadingParagraph
              primary="Your guide for Fitness Success"
              secondary="meet your coach"
              paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad nisi optio sint provident consequatur aut aliquid ratione expedita cumque eos iure."
            />
            <Button contextName="See More &rarr;" styleName="btn-primary" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
