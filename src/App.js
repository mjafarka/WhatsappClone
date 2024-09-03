import { useEffect } from 'react';
import './App.css';
import AuthPage from './authentication/authPage';
import { useUser, useUserDispatcher } from './context/UserContext';
import { sendMessage } from './firebase/firebaseDB';
import Home from './mainComponents';
import { useSelector } from 'react-redux';



function App() {
  
  // getAllMessages('userAId', 'userBId');

  // console.log("all messages", getAllMessages('userAId', 'userBId'));

  const logUser = useUserDispatcher();


  useEffect(() => {
    const alreadyLogged = JSON.parse(localStorage.getItem('user'));
    if (alreadyLogged){
      logUser({type: 'getIn', ...alreadyLogged})
    }
  },[])
  const user = useUser();

  return (
    <>
    {/* <Home/> */}
      {user.userId != null ?  <Home/> : <AuthPage/> }
      
    </>
  );
}

export default App;
