import "./Blog.css";

const Blog = () => {
  const blogData = [
    {
      questions: "Props vs state",
      answers:
        "Both props and state are used to manage data and control the behavior of componentsProps (short for properties) are passed down from a parent component to a child component. They are read-only and cannot be modified by child component. Props are to configure a component and provide with the necessary data to render. State, on the other hand, is used to manage data that can change over time. It is owned and managed by the component itself and can be modified using the setState() method. When the state of a component changes, React will automatically re-render the component and its children.",
    },
    {
      questions: "How does useState work?",
      answers:
        "useState is a built-in hook in React that allows functional components to have. It takes an initial value as an and returns an array with elements: the current state value and a function to update the state. When the state is updated using the update function, React will re-render the component and update the UI to reflect the new state.",
    },
    {
      questions: "Purpose of useEffect other than fetching data.",
      answers:
        "useEffect is commonly used for fetching data in React, it has other purposes as well. It allows functional components to perform side effects, such as updating the document title, setting up event listeners, or managing subscriptions. useEffect called after every render of the component, and it can be used to clean up any resources that were created during the previous render. By usinguseEffect`, functional components have the same capabilities as class components with lifecycle methods, making it a powerful tool for managing state and behavior in React applications.",
    },
    {
      questions: "How Does React work?",
      answers:
        "React is a JavaScript library for building interfaces. It works by a virtual representation of the UI called the Virtual DOM, which is a lightweight copy of the actual DOM. When state of a component changes React will compare the current Virtual DOM with the previous one to determine what has. It will then update the actual DOM with only the necessary changes, resulting in a more efficient and performant UI. React also uses a unidirectional data flow, where data flows from parent components to child components through props, and child components can communicate with parent components through callbacks. This makes it easier to reason about the state of the application and helps to prevent bugs.",
    },
  ];
  return (
    <>
      <h1 className="blog">Blog</h1>
      <div className="blog-post-container">
        {blogData.map((dt) => (
          <div className="blog-post">
            <h1 className="title">Title: {dt.questions}</h1>
            <p className="post-ans">
              <span>Answers: </span> {dt.answers}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
