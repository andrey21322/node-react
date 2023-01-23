import { NavLink , Route, Routes } from "react-router-dom"
import HomePage from "../homePage/homePage";
import About from "../about/about";
import TeamPage from "../teamPage/teamPage";
import ContactPage from "../contactPage/contactPage";

import './navbar.css';
import Item from "../teamPage/comp/item";


function Navbar() {
  return (
    <>
    <div className="container">
    <header>
        <div className="logo">Logo</div>
        <ul>
          <li><NavLink to='/'> Home </NavLink></li>
          <li><NavLink to='/about'> About </NavLink></li>
          <li><NavLink to='/posts'> Posts </NavLink></li>
          <li><NavLink to='/contact'> Contact </NavLink></li>
        </ul>
    </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/item" element={<Item />} />
        <Route path="*" element={<HomePage />}/>
      </Routes>
    </div>
  </>
  );
}

export default Navbar;
