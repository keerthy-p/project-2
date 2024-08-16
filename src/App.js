import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/layout/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
// import '../src/assets/css/responsive.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
