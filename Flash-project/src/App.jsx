import { Home } from "./Components/Pages/Home/Home";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import { ContactUs } from "./Components/Pages/ContactUs/ContactUs";
import { Header } from "./Components/Layouts/Header/Header";
import { Login } from "./Components/Pages/Login/Login";
import { RegisterForm } from "./Components/Layouts/RegisterForm/RegisterForm";
import { RecoverdPassword } from "./Components/Pages/RecoverdPassword/RecoverdPassword";
import { StoresPage } from "./Components/Pages/Home/StoresPage/StoresPage";
import { OffersPage } from "./Components/Pages/OffersPage/OffersPage";
import { Footer } from "./Components/Layouts/Footer/Footer";
export function App() {
  return (
    <>
      <div className="container">
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<RegisterForm/>}/>
        <Route path="/Recoverd" element={<RecoverdPassword/>}/>
        <Route path="/StoresPage" element={<StoresPage/>}/>
        <Route path="/Offers" element={<OffersPage/>}/>
        </Routes>  
        
      </div>
      <Footer/>
    </>
  );
}
