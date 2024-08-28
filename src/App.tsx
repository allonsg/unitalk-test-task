import OperatorsPage from './pages/Operators.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <OperatorsPage />;
    </ThemeProvider>
  );
};

export default App;
