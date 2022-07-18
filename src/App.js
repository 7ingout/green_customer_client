import './App.css';
import CustomerList from './components/CustomerList';
import DetailCustomer from './components/DetailCustomer';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import CreateCustomer from './components/CreateCustomer';
import EditCustomer from './components/EditCustomer';
import CustomerContainer from './components/CustomerContainer';

import CreateCustomerContainer from './components/CreateCustomerContainer';
const customers = [
  {
    no: 1,
    name: "고객",
    phone: "01012345678",
    birth: "19920206",
    gender: "여성",
    add: "울산시 남구"
  },
  {
    no: 2,
    name: "그린",
    phone: "01012345678",
    birth: "19920206",
    gender: "남성",
    add: "울산시 동구"
  },
  {
    no: 3,
    name: "kh",
    phone: "01012345678",
    birth: "19920206",
    gender: "여성",
    add: "울산시 남구"
  }
]
function App() {
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
