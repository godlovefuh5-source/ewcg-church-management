import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './providers/AppProviders';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProviders>
        <Routes />
      </AppProviders>
    </Router>
  );
};

export default App;