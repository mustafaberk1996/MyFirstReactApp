import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Details from "./Details";
import PageNotFound from "./PageNotFound";
import Contact from "./Contact";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ul className="menu">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/details/13">Hakkında</Link>
          </li>
          <li>
            <Link to="/contact">İletişim</Link>
          </li>
        </ul>
        <h1>Adopt Me</h1>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
