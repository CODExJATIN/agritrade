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
import ContractDashboard from "./components/Dashboard/Dashboard";
import FindContracts from "./components/findContracts/FindContracts";
import NewsPage from "./components/NewsPage/NewsPage";
import AIAgricultureAssistant from "./components/AI-Tools/AgriAITools";
import ConflictResolution from "./components/Conflict-Resolution/ConflictResolution";

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
        <Route path='/contract' element={<ContractView contract={sampleContracts[0]} userID='CTR001' userType={'farmer'}/>}/>
        <Route path='/cc' element={<ContractCarousel/>}/>
        <Route path='/dashboard' element={<ContractDashboard/>}/>
        <Route path='/find' element={<FindContracts/>}/>
        <Route path='/test' element={<TestContractView/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/ai' element={<AIAgricultureAssistant/>}/>
        <Route path="/report" element={<ConflictResolution/>}/>
        
  </Routes>

      {/*<Navbar/> <MyProfile/>*/}
      {/*<UserProfileCard/>*/}
      
    </div>
  );
}

export default App;
