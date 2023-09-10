import { Hero } from "../Hero/Hero";
import { WhyChoose } from "./../WhyChoose/WhyChoose";
import { Workshop } from "../Workshop/Workshop";
import { MeetCoach } from "../MeetCoach/MeetCoach";
import { Testimonials } from "../Testimonials/Testimonials";
import { Contact } from "./../Contact/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Workshop />
      <MeetCoach />
      <Testimonials />
      <Contact />
    </>
  );
};
