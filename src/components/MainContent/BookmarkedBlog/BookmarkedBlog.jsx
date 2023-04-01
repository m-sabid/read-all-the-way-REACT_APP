import "./BookmarkedBlog.css";

const BookmarkedBlog = (props) => {
  const bookmarks = props.bookmarkedBlog;
  return (
    <>
      <div className="bookmark">
        <h2 className="bookmarked_blogs">Bookmarked Blogs : {bookmarks.length}</h2>
        {bookmarks.map((dt) => (
          <>
            <h2 className="bookmark_blog_title">{dt.blog_title}</h2>
          </>
        ))}
      </div>
    </>
  );
};

export default BookmarkedBlog;
