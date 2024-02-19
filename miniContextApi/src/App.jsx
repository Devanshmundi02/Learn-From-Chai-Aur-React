import  UserContexProvider  from "./Context/UserContextProvider";
import './App.css'
import  Login  from "./Components/Login";
import  Profile  from "./Components/Profile";

function App() {

  return (
    <UserContexProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  )
}

export default App
