import "./Testimonials.scss";
import { Section } from "./../Section/Section";
import { Container } from "./../Container/Container";
import { Heading } from "./../Heading/Heading";

const TestimonialView = ({ src, alt, text, author }) => {
  return (
    <div className="testimonial-main__data">
      <img src={src} alt={alt} />
      <p className="testimonial-main__data--text">{text}</p>
      <p className="testimonial-main__data--author"> {author} </p>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <Section styleColor="">
      <Container>
        <div className="testimonial">
          <div className="testimonial-main">
            <Heading
              primary="Hear What Our Fitness Community Has to Say"
              secondary="testimonials"
            />
            <div className="testimonial-main--container">
              {[
                {
                  src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-74M95XX-1536x1536.jpg",
                  alt: "Testimonial User Image",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum totam labore isFinite.",
                  author: "- Annabelle",
                },
                {
                  src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-74M95XX-1536x1536.jpg",
                  alt: "Testimonial User Image",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum totam labore isFinite.",
                  author: "- Annabelle",
                },
                {
                  src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-74M95XX-1536x1536.jpg",
                  alt: "Testimonial User Image",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum totam labore isFinite.",
                  author: "- Annabelle",
                },
                {
                  src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-74M95XX-1536x1536.jpg",
                  alt: "Testimonial User Image",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum totam labore isFinite.",
                  author: "- Annabelle",
                },
              ].map((val, idx) => {
                return (
                  <TestimonialView
                    src={val.src}
                    alt={val.alt}
                    text={val.text}
                    author={val.author}
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
          <div className="gallery">
            {[
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg",
                alt: "Image 1",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg",
                alt: "Image 2",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
                alt: "Image 3",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg",
                alt: "Image 4",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg",
                alt: "Image 5",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
                alt: "Image 6",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg",
                alt: "Image 7",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg",
                alt: "Image 8",
              },
              {
                src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
                alt: "Image 9",
              },
            ].map((val, key) => {
              return <img key={key} src={val.src} alt={val.alt} />;
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
