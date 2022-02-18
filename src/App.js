import './App.css';
import './components.css'

import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import UnderConstruction from './UnderConstruction';
import Notfound from './Notfound';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Main className="pagesize" />}/>
      <Route path='/not' element={<UnderConstruction className="pagesize" />}/>
      <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
