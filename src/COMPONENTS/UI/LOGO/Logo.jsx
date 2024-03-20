import "./Logo.css";
import logoImage from "./ASSETS/logo.svg";

export default function Logo(props) {
  return (
    <div className="component-logo">
      <img src={logoImage} alt="HealthyFoodLogo" />
      <h2>HEALTHY SWITCHER</h2>
    </div>
  );
}
