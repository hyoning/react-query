import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/Homepage';
import ReactQueryPage from './pages/ReactQueryPage';
import NormalPage from './pages/NormalPage';

function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor:"beige", padding: "20px"}}>
        <Link to="/" style={{marginRight:"10px"}}>
           Homepage
        </Link>
        <Link to="/normal-page">
        NormalPage Query
        </Link>
        <Link to="/react-query">
           React Query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/normal-page" element={<NormalPage/>}></Route>
        <Route path="/react-query" element={<ReactQueryPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
