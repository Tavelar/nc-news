import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import TopicOfArticles from "./components/TopicOfArticles";
import ArticleById from "./components/ArticleById";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  const [sortTopic, setSortTopic] = useState("default");
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route
          path="/articles"
          element={
            <Articles sortTopic={sortTopic} setSortTopic={setSortTopic} />
          }
        />
        <Route path="/articles/topic/:topic" element={<TopicOfArticles />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
      </Routes>
    </div>
  );
}

export default App;
