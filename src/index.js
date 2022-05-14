import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import Stats from "./routes/stats";
import People from "./routes/people";
import Notes from "./routes/notes";
import Events from "./routes/events";

import "./css/normalize.css";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/people" element={<People />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </BrowserRouter>
);
