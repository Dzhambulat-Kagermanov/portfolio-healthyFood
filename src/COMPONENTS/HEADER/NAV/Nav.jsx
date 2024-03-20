import Link from "./LINK/Link";
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav>
      <ul className="head-header__nav">
        <Link text="Menu" />
        <Link text="Chefs" />
        <Link text="Recipes" />
        <Link text="Contacts" />
      </ul>
    </nav>
  );
}
