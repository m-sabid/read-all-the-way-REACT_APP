import { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import SpentTime from "./SpentTime/SpentTime";
import "./MainContent.css";
import BookmarkedBlog from "./BookmarkedBlog/BookmarkedBlog";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContent = () => {
  const [allBlogData, setAllBlogData] = useState();
  const [spentTimeData, setSpentTimeData] = useState([]);
  const [bookmarkedBlog, setBookmarkedBlog] = useState([]);

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setAllBlogData(data));
  }, []);

  const handelCountSpendTime = (singleBlogData) => {
    const newSpentTimeData = [...spentTimeData, singleBlogData];
    setSpentTimeData(newSpentTimeData);
  };

  const handelBookmark = (singleBlogData) => {
    // Check if the blog post is already bookmarked
    const isBookmarked = bookmarkedBlog.some(
      (blog) => blog.id === singleBlogData.id
    );

    if (!isBookmarked) {
      const newBookmarkedBlog = [...bookmarkedBlog, singleBlogData];
      setBookmarkedBlog(newBookmarkedBlog);
    } else {
      // Show already added toast
      toast.error("You Have Already Bookmarked This Blog!");
      const newBookmarkedBlog = [...bookmarkedBlog, singleBlogData];
      setBookmarkedBlog(newBookmarkedBlog);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="content-container">
          {allBlogData?.map((dt) => (
            <>
              <BlogCard
                dt={dt}
                handelCountSpendTime={handelCountSpendTime}
                handelBookmark={handelBookmark}
              />
            </>
          ))}
        </div>
        <div className="side-container">
          <SpentTime spentTimeData={spentTimeData} />
          <ToastContainer position="top-center" autoClose={3000}/>
          <BookmarkedBlog bookmarkedBlog={bookmarkedBlog} />
        </div>
      </div>
    </>
  );
};

export default MainContent;
