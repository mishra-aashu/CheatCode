import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MockTest from './pages/MockTest';
import Auth from './pages/Auth';
import TrickFeed from './pages/TrickFeed';
import PYQLibrary from './pages/PYQLibrary';
import Leaderboard from './pages/Leaderboard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-test" element={<MockTest />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/tricks" element={<TrickFeed />} />
          <Route path="/pyqs" element={<PYQLibrary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
