// src/routes.js
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lessons" element={<Lessons />} />
      {/* Other Routes */}
    </Routes>
  );
};

export default AppRoutes;
