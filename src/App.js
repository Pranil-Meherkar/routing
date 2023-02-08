import "./App.css";
import NotFound from "./components/NotFound";
import Feedback from "./components/Feedback";
import ContactPage from "./components/ContactsPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Following are the available routes</h1>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/contact-page">Contact-Page</Link>
          </li>
          <li>
            <Link to="asdf">Some Invalid Route</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
