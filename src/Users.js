import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useParams,
} from "react-router-dom";

const Users = () => {
  const userId = useParams().userId;

  console.log(userId);
  return (
    <ul>
      <li>Mustafa Berk</li>
      <li>Mustafa Berk</li>
      <li>Mustafa Berk</li>
      <li>Mustafa Berk</li>
      <li>Mustafa Berk</li>
      <li>Mustafa Berk</li>
      <li>Mustafa Berk</li>
    </ul>
  );
};

export default Users;
