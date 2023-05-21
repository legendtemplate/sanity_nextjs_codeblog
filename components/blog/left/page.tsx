import Input from "./input";
import Author from "./author/page";
import Social from "./social/page";
import Tag from "./tag/page";
import Cat from "./cat/page";
import Slider from "./slider";
import Ads from "./ads";
import Form from "./form";

export default function index() {
  return (
    <div className="">
      {/* <Input /> */}
      <Author />
      <Social />
      <Tag />
      <Cat />
      {/* <Slider /> */}
      {/* <Ads /> */}
      {/* <Form /> */}
    </div>
  );
}
