import { useSelector } from "react-redux";
import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import BurgerBtn from "../UI/BURGER-BTN/BurgerBtn";
import "./BurgerMenu.css";
import Nav from "./NAV/Nav";
import "./Adaptive.css";

export default function BurgerMenu(props) {
  const modalWindowState = useSelector((state) => {
    return state.burgerMenuToggleReducer.currentState;
  });

  return (
    <section>
      <BaseStructure
        noInner
        wrapperStyles={{ zIndex: 3 }}
        wrapperContent={
          <div
            className={`burgerMenu-block ${
              modalWindowState ? `--${modalWindowState}` : ""
            }`}
          >
            <BurgerBtn additionalClass="burgerMenu-block__btn" type="close" />
            <Nav />
          </div>
        }
      />
    </section>
  );
}
