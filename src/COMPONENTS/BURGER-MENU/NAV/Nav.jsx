import Link from "./LINK/Link";
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav className="burgerMenu-block-nav__wrappper">
      <ul className="burgerMenu-block__nav">
        <Link text="Menu" />
        <Link text="Recipes" />
        <Link text="Chefs" />
        <Link text="Contacts" />
      </ul>
    </nav>
  );
}
