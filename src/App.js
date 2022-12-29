import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useParams,
} from "react-router-dom";
import Details from "./Details";
import PageNotFound from "./PageNotFound";
import Contact from "./Contact";
import Users from "./Users";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details/13">Details</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <h1 className="app-title">Adopt Me</h1>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<Users />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
