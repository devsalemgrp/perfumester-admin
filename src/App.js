import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainPage from './Pages/MainPage/mainPage';
import Men from './Pages/Men/men';
import Home from './Pages/Home/home';
import Women from './Pages/Women/women';
import New from './Pages/New/new';
import OrderList from './Pages/OrderList/orderList';
import Products from './Pages/Products/products';

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
          <Route path='/women' element={<Women/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/orderList' element={<OrderList/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
