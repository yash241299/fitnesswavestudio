import "./Header.scss";
import { Container } from "./../Container/Container";
import { Button } from "./../Button/Button";

const ListItem = ({ name, styleName, dropdownElement, dropdownParent }) => {
  return (
    <li className={dropdownParent}>
      <a className={styleName} href="#">
        {name}
      </a>
      {dropdownElement}
    </li>
  );
};

const DropDownList = () => {
  const item = [
    "Yoga",
    "Pilates",
    "Strength Training",
    "Zumba",
    "Meditation",
    "Nutrition",
  ];
  return (
    <>
      <div className="dropdown-card">
        <ul className="dropdown-menu-item">
          {item.map((val, idx) => {
            return (
              <ListItem key={idx} name={val} styleName="dropdown-menu-link" />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const Header = () => {
  const item = ["Home", "About", "Services", "Contact", "blogs"];
  return (
    <header className="header">
      <Container>
        <div className="navbar-items">
          <img
            src="img/logo.png"
            alt="Fitness Studio Wave Logo"
            className="logo"
          ></img>

          <nav className="main-nav">
            <ul className="main-nav-list">
              {item.map((val, idx) => {
                let dropdownElement = <></>;
                let styleName = "main-nav-link";
                let dropdownParent = "list-item";
                if (val === "Services") {
                  styleName = "main-nav-link dropdown-btn";
                  dropdownElement = <DropDownList />;
                  dropdownParent = "dropdown";
                }
                return (
                  <ListItem
                    key={idx}
                    name={val}
                    styleName={styleName}
                    dropdownElement={dropdownElement}
                    dropdownParent={dropdownParent}
                  />
                );
              })}
            </ul>
          </nav>
          <Button styleName="btn-primary" contextName="Join us" />
        </div>
      </Container>
    </header>
  );
};
