import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainPage from './Pages/MainPage/mainPage';
import Men from './Pages/Men/men';
import Home from './Pages/Home/home';

function App() {
  return (
    <div className="text-white helvetica flex flex-row bg-[#313131]">
      <div className='w-1/5 h-auto'>
        <Sidebar/>
      </div>
      <div className='w-4/5 '>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/men' element={<Men/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
