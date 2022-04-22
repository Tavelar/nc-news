import "./error.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import TopicOfArticles from "./components/TopicOfArticles";
import ArticleById from "./components/ArticleById";
import SingleComment from "./components/SingleComment";
import Home from "./components/Home";
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
function App() {
  const [sortTopic, setSortTopic] = useState("default");
  const [user, setUser] = useState("grumpy19");
  return (
    <div className="App">
      <Header user={user} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={
            <Articles sortTopic={sortTopic} setSortTopic={setSortTopic} />
          }
        />
        <Route path="/articles/topic/:topic" element={<TopicOfArticles />} />
        <Route
          path="/articles/:article_id"
          element={<ArticleById user={user} setUser={setUser} />}
        />
        <Route
          path="/comments/:comment_id"
          element={<SingleComment user={user} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
