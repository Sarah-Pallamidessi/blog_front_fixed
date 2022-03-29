import logo from './logo.svg';
import './App.css';
import './modules/grid.js';
import Grid from "./modules/grid.js";
import Post from "./modules/post.js";
import {Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Grid />} />
      <Route path="/blog/:id" element={<Post />} />
    </Routes>

  );
}

export default App;


