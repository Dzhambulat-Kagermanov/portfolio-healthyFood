import "./Header.css";
import twitterImage from "./ASSETS/twitterIcon.svg";
import instagrammImage from "./ASSETS/instagrammIcon.svg";
import facebookImage from "./ASSETS/facebookIcon.svg";
import Logo from "./LOGO/Logo";
import Btn from "./BTN/Btn";
import { useState } from "react";

export default function Header({ socialName }) {
  const list = {
    twitter: ["Twitter", twitterImage],
    instagramm: ["Instagramm", instagrammImage],
    facebook: ["Facebook", facebookImage],
  };
  return (
    <div className="social-group-item__header">
      <Logo data={list[socialName.toLowerCase()]} />
      <Btn text="FOLLOW US" />
    </div>
  );
}
