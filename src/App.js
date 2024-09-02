import RegistrationForm from "./components/Forms/RegistrationForm/RegistrationForm";
import './App.css';
import Boxcard from './components/Box-card';
import LoginForm from './components/Forms/LoginForm/LoginForm'
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/widgets/Navbar";
import UserProfileCard from "./components/widgets/UserProfileCard";
import MyProfile from "./components/widgets/MyProfileCard";
import ContractCard from "./components/widgets/ContractCard";
import HomePage from "./components/HomePage/HomePage";
import UserProfile from "./components/UserProfile/UserProfile";
import SignUp from "./components/Forms/SignUp";
import ContractForm from "./components/Forms/CreateContract/CreateContract";
import ChatBot from "./components/ChatBot/ChatBotInterface";
import ContractView from "./components/ContractPage/ContractPage";
import { sampleContracts } from "./components/ContractPage/contractData";
import TestContractView from "./components/ContractPage/TestContract";
import ContractCarousel from "./components/widgets/ContractCorousel";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/create' element={<ContractForm/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/bot' element={<ChatBot/>}/>
        <Route path='/contract' element={<ContractView contract={sampleContracts[0]} userID='CTR001' userType={'contractor'}/>}/>
        <Route path='/cc' element={<ContractCarousel/>}/>

        <Route path='/test' element={<TestContractView/>}/>
  </Routes>

      {/*<Navbar/> <MyProfile/>*/}
      {/*<UserProfileCard/>*/}
      
    </div>
  );
}

export default App;
