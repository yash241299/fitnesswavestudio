import { Container } from "../Container/Container";
import { HeadingTertiary } from "../Heading/Sub-Component/HeadingTertiary";
import "./Footer.scss";

const UnorderedList = ({ className, data }) => {
  return (
    <ul className={className}>
      {data.map((val, key) => {
        return (
          <ListItem
            key={key}
            className={className + "-link"}
            icon={val.icon}
            text={val.text}
            href="#"
          />
        );
      })}
    </ul>
  );
};

const ListItem = ({ className, icon, text, href }) => {
  const ico = <ion-icon name={icon}></ion-icon>;
  const content =
    text === undefined ? (
      <a href={href} className={className}>
        {ico}
      </a>
    ) : icon === undefined ? (
      <a href={href} className={className}>
        {text}
      </a>
    ) : (
      <>
        {ico}
        {text}
      </>
    );
  return <li>{content}</li>;
};

const FooterLists = ({ className, text, children }) => {
  return (
    <div className={"footer-main__" + className}>
      <HeadingTertiary text={text} />
      {children}
    </div>
  );
};

export const Footer = () => {
  const data = [
    [
      { icon: "home-outline", text: "123, Beker Street" },
      { icon: "mail-outline", text: "abc@example.com" },
      { icon: "call-outline", text: "+91 9999998877" },
      { icon: "time-outline", text: "9:00 - 9:00" },
    ],
    [
      { text: "About Company" },
      { text: "Blogs" },
      { text: "Refund Policy" },
      { text: "Contact Us" },
    ],
    [
      { icon: "logo-instagram" },
      { icon: "logo-facebook" },
      { icon: "logo-twitter" },
      { icon: "logo-youtube" },
    ],
  ];
  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <FooterLists className="logo" text="Fitness Studio Wave">
            <p className="footer-main__logo-text">
              Lorem ipsum dolor, sit amet consectetur.
            </p>
            {/*  */}
          </FooterLists>

          <FooterLists
            className="getintouch"
            text="Get In touch"
            data={data[0]}
          >
            <UnorderedList className="footer-main__list" data={data[0]} />
          </FooterLists>

          <FooterLists className="quicklinks" text="Quick Links">
            <UnorderedList className="footer-main__list" data={data[1]} />
          </FooterLists>

          <FooterLists className="location" text="Location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.464946629981!2d77.36091877386757!3d28.40522429436961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcd791431a7f%3A0xe5d6020d9cf2e006!2sPuri%20Pratham%20Society!5e0!3m2!1sen!2sin!4v1692696785387!5m2!1sen!2sin"
              loading="lazy"
              referredpolicy="no-referrer-when-downgrade"
            ></iframe>
          </FooterLists>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright__text">
            Copyright &copy;. All rights reserved
          </p>
          <UnorderedList
            className="footer-copyright--social-links"
            data={data[2]}
          />
        </div>
      </Container>
    </footer>
  );
};
