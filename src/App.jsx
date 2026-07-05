import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Coffee Project Starter</h1>
      <p>React 19 + Vite + Router + Sass + Vitest</p>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: 24 }}>
      <h2>About</h2>
      <p>Starter branch for students.</p>
      <Link to="/">Back</Link>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}