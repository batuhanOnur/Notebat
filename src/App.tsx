import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NavigationGuard from './utils/navigationGuards/NavigationGuard'
import Boards from './components/boards/Boards';
//import Board from './components/boards/Board';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<NavigationGuard />}>
          <Route path="/boards" element={<HomePage />}>
            <Route path=":id" element={<Boards />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
