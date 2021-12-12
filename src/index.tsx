import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ReactDOM from 'react-dom';
import { theme } from './components/theme/theme';
import './index.css';
import App from './router/App';
ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
