// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
