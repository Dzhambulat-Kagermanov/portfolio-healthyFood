import { useState } from "react";
import Bar from "./BAR/Bar";
import Btn from "./BTN/Btn";
import "./Item.css";
import Text from "./TEXT/Text";

export default function Item({
  title,
  author,
  date,
  socialData,
  text,
  id,
  setActive,
  isActive,
  additionalClass,
}) {
  return (
    <li
      className={`recipes-group__item --item${id} ${
        isActive ? "--active" : ""
      } ${additionalClass}`}
      onClick={(event) => {
        if (
          !event.target.closest(".recipes-group-item__btn") &&
          !event.target.classList.contains("recipes-group-item__btn")
        ) {
          setActive(id);
        }
      }}
    >
      <article>
        <Btn onClick={setActive} />
        <Text text={text} />
        <Bar
          title={title}
          author={author}
          date={date}
          socialData={socialData}
        />
      </article>
    </li>
  );
}
