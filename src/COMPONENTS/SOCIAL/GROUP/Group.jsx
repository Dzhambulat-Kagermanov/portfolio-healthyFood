import "./Group.css";
import Item from "./ITEM/Item";
import socialImage1 from "./ASSETS/socialImage1.png";
import socialImage2 from "./ASSETS/socialImage2.png";
import socialImage3 from "./ASSETS/socialImage3.png";
import socialImage4 from "./ASSETS/socialImage4.png";
import socialImage5 from "./ASSETS/socialImage5.png";
import socialImage6 from "./ASSETS/socialImage6.png";

export default function Group(props) {
  return (
    <ul className="social-block__group --groupBlock">
      <Item
        socialName="twitter"
        date="24 Jun at 16:20 pm"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing"
        author="@DennisFerguson"
      />
      <Item
        imageType
        images={[
          socialImage1,
          socialImage2,
          socialImage3,
          socialImage4,
          socialImage5,
          socialImage6,
        ]}
        socialName="instagramm"
      />
      <Item
        socialName="facebook"
        date="24 Jun at 16:20 pm"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing "
        author="@DennisFerguson"
      />
    </ul>
  );
}
