import { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import SpentTime from "./SpentTime/SpentTime";
import "./MainContent.css";

const MainContent = () => {
  const [AllBlogData, setAllBlogData] = useState();

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setAllBlogData(data));
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="content-container">
          {AllBlogData?.map((dt) => (
            <>
              <BlogCard dt={dt} />
            </>
          ))}
        </div>
        <div className="side-container">
          <SpentTime />
        </div>
      </div>
    </>
  );
};

export default MainContent;
