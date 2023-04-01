import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogCard.css";

const BlogCard = (props) => {
  console.log("blogData", props);

  return (
    <>
      <div className="container">
        <div className="blog_img">
          <img src={props.dt.post_image} alt="" />
        </div>
        <div className="blog_content">
          <div className="blog_info">
            <div className="more_info">
              <img src={props.dt.author_details.author_image} alt="" />
              <div className="text">
                <h2>{props.dt.author_details.author_name}</h2>
                <h3>{props.dt.post_date}</h3>
              </div>
            </div>
            <button className="bookmark_button">
              {props.dt.read_time} Min Read{" "}
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
          <h1 className="blog_title">{props.dt.blog_title}</h1>
          <br />
          <p className="hash_tags">
            <span>{props.dt.hash_tags[0]}</span>{" "}
            <span>{props.dt.hash_tags[1]}</span>
          </p>
          <button className="mark_read">
            Mark as read
          </button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default BlogCard;
