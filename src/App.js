import './App.css';
import './components.css'

import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main className="pagesize"/>
    </div>
  );
}

export default App;
