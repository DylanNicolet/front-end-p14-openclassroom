import React from 'react';
import {Outlet} from "react-router-dom";
import '../sass/App.css';
import Header from '../layouts/Header';

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
