import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import BurgerBtn from "../UI/BURGER-BTN/BurgerBtn";
import Logo from "../UI/LOGO/Logo";
import "./Header.css";
import Nav from "./NAV/Nav";
import "./Adaptive.css";

export default function Header(props) {
  return (
    <section>
      <BaseStructure
        noInner
        wrapperStyles={{ zIndex: 2 }}
        wrapperContent={
          <header className="head-header">
            <div className="inner">
              <div className="head-block__header">
                <Logo />
                <Nav />
                <BurgerBtn additionalClass="head-header__btn" type="open" />
              </div>
            </div>
          </header>
        }
      />
    </section>
  );
}
