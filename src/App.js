import './App.css';
// import CustomerList from './components/CustomerList';
import DetailCustomer from './components/DetailCustomer';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
// import CreateCustomer from './components/CreateCustomer';
import EditCustomer from './components/EditCustomer';
import CustomerContainer from './components/CustomerContainer';
import CreateCustomerContainer from './components/CreateCustomerContainer';
import JoinForm from './components/JoinForm';
import Login from './components/Login';
import CreateGallery from './components/CreateGallery';
import { useEffect } from 'react';
import { getCookie } from './util/cookie';
import { setLogin } from './modules/logincheck';
import { useDispatch } from 'react-redux';
import GalleryListContainer from './components/GalleryListContainer';
// const customers = [
//   {
//     no: 1,
//     name: "고객",
//     phone: "01012345678",
//     birth: "19920206",
//     gender: "여성",
//     add: "울산시 남구"
//   },
//   {
//     no: 2,
//     name: "그린",
//     phone: "01012345678",
//     birth: "19920206",
//     gender: "남성",
//     add: "울산시 동구"
//   },
//   {
//     no: 3,
//     name: "kh",
//     phone: "01012345678",
//     birth: "19920206",
//     gender: "여성",
//     add: "울산시 남구"
//   }
// ]
function App() {
  const dispatch = useDispatch();
  const uname= getCookie('username');
  useEffect(()=>{
    if(uname){
      dispatch(setLogin())
    }
  },[])
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* props로 위에 {customers}를 CustomerList로 전달 */}
        {/* <Route path="/" element={<CustomerList customers={customers}/>} /> */}
        <Route path="/" element={<CustomerContainer/>} />
        <Route path="/detailview/:no" element={<DetailCustomer/>} />
        <Route path="/edit/:no" element={<EditCustomer/>} />
        {/* <Route path="/write" element={<CreateCustomer/>} /> */}
        <Route path="/write" element={<CreateCustomerContainer/>} />
        <Route path="/join" element={<JoinForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<CreateGallery/>}/>
        <Route path="/gallerylist" element={<GalleryListContainer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
