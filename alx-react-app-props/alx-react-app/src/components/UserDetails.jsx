import { UserContext } from "./UserContext";
function UserDetails({ userData }) {
  const userData = UserContext(UserContext);
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
}

export default UserDetails;
