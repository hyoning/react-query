import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/Homepage';
import ReactQueryPage from './pages/ReactQueryPage';
import NormalPage from './pages/NormalPage';
import ReactHookQueryPage from './pages/ReactHookQueryPage';
import ReactUseQueries from './pages/ReactUseQueries';

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
        <Link to="/react-hook-query">
           React-hook-query
        </Link>
        <Link to="/react-use-query">
           React-use-query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/normal-page" element={<NormalPage/>}></Route>
        <Route path="/react-query" element={<ReactQueryPage/>}></Route>
        <Route path="/react-hook-query" element={<ReactHookQueryPage />}></Route>
        <Route path="/react-use-query" element={<ReactUseQueries />}></Route>
      </Routes>
    </div>
  );
}

export default App;
