import { useState } from "react";
import "./Group.css";
import Item from "./ITEM/Item";

export default function Group(props) {
  const itemsData = [
    {
      title: "breakfast",
      date: "05 Jul 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      author: "Jason Keller",
      socialData: [275, 12],
      id: 1,
    },
    {
      title: "lunch",
      date: "05 Jul 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      author: "Jason Keller",
      socialData: [275, 12],
      id: 2,
    },
    {
      title: "dinner",
      date: "05 Jul 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      author: "Jason Keller",
      socialData: [275, 12],
      id: 3,
    },
    {
      title: "sweets",
      date: "05 Jul 2024",
      text: "Lorem ipsum dolor sit amet tempor incididunt, elit sed do eiusmod tempor incididunt iporum sepectro",
      author: "Jason Keller",
      socialData: [275, 12],
      id: 4,
    },
  ];
  let itemNumber = 0;

  const [active, setActive] = useState(1);
  return (
    <article>
      <ul
        className={`recipes-block__group ${
          active ? "--preActive" : ""
        } --groupBlock`}
      >
        {itemsData.map((el) => {
          let itemClassState = "";
          if (active && active !== el.id) {
            itemNumber++;
            itemClassState = `slim${itemNumber}`;
          }
          return (
            <Item
              key={el.id}
              title={el.title}
              date={el.date}
              text={el.text}
              author={el.author}
              socialData={el.socialData}
              id={el.id}
              isActive={el.id === active}
              setActive={setActive}
              additionalClass={itemClassState}
            />
          );
        })}
      </ul>
    </article>
  );
}
