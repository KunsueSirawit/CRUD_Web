import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
import UserCreate from "./component/UserCreate";
import UserUpdate from "./component/UserUpdate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
