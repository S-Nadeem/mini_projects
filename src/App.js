import "./App.css";
import Accordian from "./Components/Accordian";
import ColorGenerator from "./Components/ColorGenerator";
import ModalTest from "./Components/Custom-Modal/Modal-test.js";
import CustomScroll from "./Components/CustomScroll/index.js";
import GitHubFinder from "./Components/GitHub-profile-Finder/index.js";
import ImageSlider from "./Components/image-slider/index.js";
import LoadMoreData from "./Components/LoadMoreData/index.js";
import SearchAutoComplete from "./Components/Search-autoComplete/index.js";
import StarRating from "./Components/StarRating.jsx";

function App() {
  return (
    <div className="App">
      {/* //Accordian
      <Accordian /> */}
      {/* ColorGenerator
      <ColorGenerator /> */}
      {/* star Rating Component
      <StarRating /> */}
      {/* Image SliderCoponent
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"20"}
      /> */}
      {/* LoadMoreData Component

      <LoadMoreData url={"https://dummyjson.com/products"} limit={"10"} /> */}
      {/* customScroll Component
      <CustomScroll /> */}
      {/* Modal Test Component
      <ModalTest /> */}
      {/*  GitHub Component
      <GitHubFinder /> */}
      <SearchAutoComplete />
    </div>
  );
}

export default App;
