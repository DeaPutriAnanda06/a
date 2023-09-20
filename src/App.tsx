import './App.css';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiTextField } from './components/MuiTextField';
import { MuiTable } from './components/MuiTable';

function App() {
  return (
    <div className="App">
      <MuiNavbar /> 
      <MuiTextField />
      <MuiTable /> 
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
