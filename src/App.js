import React from 'react';
import Container from './components/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShoesProvider } from './context/ShoesContext';

function App() {
  return (
    <ShoesProvider>
      <Router>
        <Container/>
      </Router>
    </ShoesProvider>
  );
}

export default App;
