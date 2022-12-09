import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddData from './Component/Class/AddData';
// import AlertExample from './Component/Class/Alert';
import ListCompo from './Component/Class/listComp';
import EditComp from './Component/Class/UpdateData';
import AbouteCom from './Component/Functional/Aboute';
import Contact from './Component/Functional/Contact';
import DetailsCom from './Component/Functional/details';
import HomeCom from './Component/Functional/Home';
import Login from './Component/Functional/Login-Reg';
import NavBar from './Component/Functional/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<HomeCom />}/>
      <Route path='/about' element={<AbouteCom />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/detail/:id' element={<DetailsCom />}/>
      <Route path='/data' element={<ListCompo />}/>
      <Route path='/data/add' element={<AddData />}/>
      <Route path='/update' element={<EditComp />}/>
    </Routes>
    </>
  )
}

export default App;
