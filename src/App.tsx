import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './index.css';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;