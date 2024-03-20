import "./Link.css";

export default function Link({ text }) {
  return (
    <li className="head-header-nav__link">
      <a className="comp-text-3" href={`#${text.toLowerCase()}-anchor`}>
        {text}
      </a>
    </li>
  );
}
