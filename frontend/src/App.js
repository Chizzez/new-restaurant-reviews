/* import logo from './logo.svg';
import './App.css'; */
import React from "react";
import {Route, Link, Routes, BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  } 
  
  return (
    <BrowserRouter>
      <div className="App">
        
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/restaurants" className="navbar-brand">
            Restaurant Reviews
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/restaurants"} className="nav-link">Restaurants</Link>
            </li>
            <li className="nav-item" >
              { user 
                ? (<a href="/" onClick={logout} className="nav-link" style={{cursor:'pointer'}}>Logout {user.name}</a>) 
                : (<Link to={"/login"} className="nav-link">Login</Link>)
              }

            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<RestaurantsList/>} />
            <Route path="/restaurants/*" element={<RestaurantsList/>} />
            <Route path="/restaurants/:id/review" element={<AddReview />}/>
            <Route path="/restaurants/:id" element={<Restaurant />}/>
            <Route path="/login" element={<Login login={login} />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
