import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NavigationGuard from './utils/navigationGuards/NavigationGuard'


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NavigationGuard />} >
              <Route index element={<HomePage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
