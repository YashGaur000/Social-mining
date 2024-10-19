import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
