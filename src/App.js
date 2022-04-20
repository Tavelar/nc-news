import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import TopicOfArticles from "./components/TopicOfArticles";
import ArticleById from "./components/ArticleById";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/topics/:topic" element={<TopicOfArticles />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
      </Routes>
    </div>
  );
}

export default App;
