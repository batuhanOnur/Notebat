import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NavigationGuard from './utils/navigationGuards/NavigationGuard'
import BoardsPage from './pages/BoardsPage';
import KanbanPage from './pages/KanbanPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<NavigationGuard />}>
          <Route index element={<HomePage />} />
          <Route path="/boards" element={<HomePage />}>
            <Route path=":id" element={<BoardsPage />}/>
            <Route path="kanban/:boardId" element={<KanbanPage />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
