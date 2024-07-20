import logo from './logo.svg';
import './App.css';
import AuthPage from './authentication/authPage';
import { getUser, useUser } from './context/UserContext';
import SideBar from './mainComponents/sidebar/main';
import { addToLocalPersons, searchByNameLocal } from './localDB/localDB';
import Home from './mainComponents';
import { getAllMessages, sendMessage } from './firebase/firebaseDB';
// import './tailwind.css'


function App() {
  
  getAllMessages('userAId', 'userBId');

  const user = useUser();
  return (
    <>
    <Home/>
      {/* {user.userId != null ?  <Home/> : <AuthPage/> } */}
    </>
  );
}

export default App;
