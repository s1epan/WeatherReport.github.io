import ContentLeftBar from "../ContentLeftBar/ContentLeftBar";
import ContentRightBar from "../ContentRightBar/ContentRightBar";
import Header from "../Header/Header";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <Header />
      <ContentLeftBar />
      <ContentRightBar />
    </div>
  );
}

export default Content;
