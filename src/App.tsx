import './App.scss'; 
import { Link, Route, Routes } from 'react-router-dom';
import VirtualList from './components/VirtualList';
import About from './components/About';
import HooksPage from './components/HooksPage';


const App = () => 
<div className="app">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="virtual-list" element={<VirtualList />} />
  <Route path="react-state-hooks" element={<HooksPage />} />
  <Route path="about" element={<About />} />
</Routes>
</div>

const Home = (props: any) => 
<>
<main>
<h1 className='mt-1 app-title'>Mi app!</h1>
</main>
<nav className='app-header'>
  <Link to="/">Home</Link>
  <Link to="/virtual-list">Virtualized List</Link>
  <Link to="/react-state-hooks">React state Hooks</Link>
  <Link to="/about">About</Link>
</nav>
</>

export default App;
