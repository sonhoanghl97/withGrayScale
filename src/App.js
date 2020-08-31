import React from "react";
import "./styles.css";
import Img from "./components/Img";
import WithGrayScale from "./components/withGrayScale";

const ImgWithGrayScale = WithGrayScale(Img, "grayscale(0.8)");
export default function App() {
  return (
    <div className="App">
      <ImgWithGrayScale src="https://cdn.ca.emap.com/wp-content/uploads/sites/8/2019/08/London-skyline_1-300x200.jpg" />
    </div>
  );
}
