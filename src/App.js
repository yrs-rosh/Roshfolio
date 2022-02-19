import './App.css';
import './components.css'

import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { Link, Route, Routes } from 'react-router-dom';
import UnderConstruction from './UnderConstruction';
import Notfound from './Notfound';
import Aboutme from './Components/Aboutme/Aboutme';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Volunteering from './Components/Volunteering/Volunteering';
import HomeIcon from '@mui/icons-material/Home';
function App() {
  return (
    <div className="App">
    <Link to="/"><div className='back'><HomeIcon sx={{ fontSize: 40}}/></div></Link>
          

      <Sidebar/>
      <Routes>
      
      <Route path='/' element={<Main className="pagesize" />}/>
      <Route path='/about' element={<Aboutme className="pagesize" />}/>
      <Route path='/skills' element={<Skills className="pagesize" />}/>
      <Route path='/projects' element={<Portfolio className="pagesize" />}/>
      <Route path='/volunteering' element={<Volunteering className="pagesize" />}/>
      <Route path='/error404' element={<Notfound className="pagesize" />}/>
      <Route path='/connect' element={<Contact className="pagesize" />}/>
      <Route path='/more' element={<UnderConstruction className="pagesize" />}/>
      <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
