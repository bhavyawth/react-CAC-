import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({username, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username"
      value={username} 
      onChange={(e)=> setUsername(e.target.value)}></input>
      <input type="text" placeholder="Password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}></input>
      <button className="bg-amber-600 border-2 p-4 hover:bg-amber-300"
       onClick={handleLogin}>logIn</button>
    </div>
  );
}

export default Login;