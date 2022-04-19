import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
