import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  // Ensure user exists before accessing properties
  if (!user || !user.username) return <div>Please Login</div>;

  return <div>WELCOME {user.username}!</div>;
}
