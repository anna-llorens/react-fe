import './App.scss'; 
import { Link, Route, Routes } from 'react-router-dom';
import VirtualList from './components/VirtualList';
import StateHooks from './components/StateHooks';

const App = () => 
<div className="App">

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="virtual-list" element={<VirtualList />} />
  <Route path="react-state-hooks" element={<StateHooks />} />
  <Route path="about" element={<About />} />
</Routes>
</div>

const Home = (props: any) => 
<>
<main>
<h1>Learning Frontend yaaay !</h1>
</main>
<nav className='app-header'>
  <Link to="/">Home</Link>
  <Link to="/virtual-list">Virtualized List</Link>
  <Link to="/react-state-hooks">React state Hooks</Link>
  <Link to="/about">About</Link>
</nav>
</>

const About = (props: any) => 
<>
<main>
  <h2>Tab content example</h2>
  <p>
    Add your awesome code here!!
  </p>
</main>
<nav>
  <Link to="/">Home</Link>
</nav>
</>

  

export default App;
