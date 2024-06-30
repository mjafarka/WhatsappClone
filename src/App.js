import logo from './logo.svg';
import './App.css';
import AuthPage from './authentication/authPage';
import { getUser, useUser } from './context/UserContext';
// import './tailwind.css'


function App() {

  const user = useUser();

  
  return (
    <>
      {user.userId != null ?  <h1>Welcome {user.name}</h1> : <AuthPage/> }
    </>
  );
}

export default App;
