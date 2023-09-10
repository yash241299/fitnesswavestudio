import { Container } from "../Container/Container";
import { Form } from "../Form/Form";
import { HeadingSecondary } from "../Heading/Sub-Component/HeadingSecondary";
import { Section } from "../Section/Section";
import { Button } from "./../Button/Button";
import { Label } from "./../Form/Label/Label";
import { TextArea } from "../Form/TextArea/TextArea";
import { Input } from "././../Form/Input/Input";

import "./Contact.scss";
export const Contact = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="contact">
          <div className="contact-logo">
            <img
              src="https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg"
              alt="Contact Us Logo"
              className="img"
            />
          </div>
          <div className="contact-main">
            <HeadingSecondary headingText="Contact US" />
            <Form>
              {[
                { type: "text", id: "name", labelText: "Full Name" },
                { type: "text", id: "email", labelText: "Email" },
                { type: "text", id: "mobile", labelText: "Mobile" },
                { id: "message", labelText: "Message" },
              ].map((val, key) => {
                const input =
                  val.id === "message" ? (
                    <TextArea id={val.id} />
                  ) : (
                    <Input id={val.id} />
                  );
                const content = (
                  <div key={key} className="form-group">
                    <Label labelFor={val.id} labelText={val.labelText} />
                    {input}
                  </div>
                );
                return content;
              })}
              <Button
                contextName="Send Message"
                styleName="btn-primary flex-start"
              />
            </Form>
          </div>
        </div>
      </Container>
    </Section>
  );
};
