import { Link, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import { Home } from "../pages/Home";
import { HooksPage } from "../pages/Hooks/HooksPage";

import VirtualList from "../pages/VirtualList";
import './Components.scss';

export const Header = () =>
  <>
    <nav className='header'>
      <Link to="/">Home</Link>
      <Link to="/virtual-list">Arrays</Link>
      <Link to="/react-state-hooks">React state Hooks</Link>
      <Link to="/about">About</Link>
    </nav>
    <div className='header-content'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="virtual-list" element={<VirtualList />} />
        <Route path="react-state-hooks" element={<HooksPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  </>