import "./WhyChoose.scss";
import { Section } from "./../Section/Section";
import { Container } from "../Container/Container";
import { Heading } from "./../Heading/Heading";
import { Card } from "../Card/Card";
import { Normal } from "../Card/Content/Normal";

export const WhyChoose = () => {
  const cardData1 = {
    headingText: "Comfortable Place",
    paragraphText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate ex impedit unde eius a. Quos nam obcaecati.",
  };
  const cardData2 = [
    {
      headingText: "Comfortable Place",
      paragraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate ex impedit unde eius a. Quos nam obcaecati.",
    },
    {
      headingText: "Comfortable Place",
      paragraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate ex impedit unde eius a. Quos nam obcaecati.",
    },
  ];
  return (
    <Section styleColor="primary">
      <Container>
        <div className="section-why">
          <div className="section-why--row1">
            <img
              src="https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/a-woman-in-her-home-on-a-yoga-mat-in-a-flexible-yo-F7GWNFG.jpeg"
              alt="Fitness Wave Studio Why Image"
            />
            <div className="section-why--row1__heading">
              <Heading
                primary="Your Partner in Achieving Fitness Excellence!"
                secondary="why choose us?"
              />
              <Card bgColor="card-white">
                <Normal
                  headingText={cardData1.headingText}
                  paragraphText={cardData1.paragraphText}
                />
              </Card>
            </div>
          </div>
          <div className="section-why--row2">
            {cardData2.map((val, idx) => {
              return (
                <Card key={idx} bgColor="card-light-dark">
                  <Normal
                    headingText={val.headingText}
                    paragraphText={val.paragraphText}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
