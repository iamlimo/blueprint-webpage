import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (<Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>

    </div>
  </Router>
  );
}

export default App;
