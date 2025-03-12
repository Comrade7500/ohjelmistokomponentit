import React from "react";
import Header from "./Header";
import PostList from "./PostList";
import UserFetcher from "./UserFetcher";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Post List</h1>
      <PostList />
      <UserFetcher />
    </div>
  );
};

export default App;
