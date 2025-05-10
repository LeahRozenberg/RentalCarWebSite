import 'primereact/resources/themes/lara-light-indigo/theme.css';  // נושא עיצוב
import 'primereact/resources/primereact.min.css';  // סגנונות בסיסיים
import 'primeicons/primeicons.css';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/main';
import { MainExemple } from './components/mainExemple';
import { AppProvider } from '@toolpad/core/AppProvider';
function App() {
  return (
    <AppProvider><Main></Main></AppProvider>
  );
}

export default App;
