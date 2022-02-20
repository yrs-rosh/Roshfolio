import './App.css';
import '../src/Style/components.css'

import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { Link, Route, Routes } from 'react-router-dom';
import UnderConstruction from './UnderConstruction';
import Notfound from './Notfound';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Volunteering from './Components/Volunteering';
import HomeIcon from '@mui/icons-material/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
          

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
      <Footer/>
    </div>
  );
}

export default App;
