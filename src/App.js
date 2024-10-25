import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './styles.css';
import Insert from './components/Insert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert" element={<Insert/>}/>
      </Routes>
    </Router>
  );
}

export default App;
