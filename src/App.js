import React from 'react';
import './App.css';
import Nav from './pages/nav/nav';
import Footer from './pages/footer/footer';
import Search from './pages/search/search';

function App() {
  return (
    <div>
      <Nav />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
