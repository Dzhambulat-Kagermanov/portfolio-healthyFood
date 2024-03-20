import Header from "./HEADER/Header";
import Images from "./IMAGES-GROUP/Images";
import "./Item.css";
import Text from "./TEXT-GROUP/Text";

export default function Item({
  imageType,
  socialName,
  date,
  text,
  author,
  images,
}) {
  return (
    <li className="social-group__item">
      <Header socialName={socialName} />
      {imageType ? (
        <Images images={images} />
      ) : (
        <Text date={date} text={text} author={author} />
      )}
    </li>
  );
}
