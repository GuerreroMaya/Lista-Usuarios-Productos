import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import Users from "./Pages/Users";
import Products from "./Pages/Products";


function App() {

  const [usersList, setUsersList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Lists
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users usersList={usersList} />} />
          <Route path="/products" element={<Products productsList={productsList} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
