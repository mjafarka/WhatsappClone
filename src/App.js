import './App.css';
import AuthPage from './authentication/authPage';
import { useUser } from './context/UserContext';
import { sendMessage } from './firebase/firebaseDB';
import Home from './mainComponents';
import { useSelector } from 'react-redux';



function App() {
  
  // getAllMessages('userAId', 'userBId');

  // console.log("all messages", getAllMessages('userAId', 'userBId'));
  const user = useUser();

  return (
    <>
    {/* <Home/> */}
      {user.userId != null ?  <Home/> : <AuthPage/> }
      
    </>
  );
}

export default App;
