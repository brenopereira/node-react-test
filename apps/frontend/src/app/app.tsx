import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/authentication/signin';
import Signup from './pages/authentication/signup';
import Home from './pages/home';
import Books from './pages/books';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;
