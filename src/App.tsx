import { Navigate, Route, Routes } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import UserList from "./features/userList/userList";
import UserDetails from "./features/userDetails/userDetails";

function App() {
  return (
    <div>
      <Toolbar start={<h1>User Directory Viewer</h1>} />
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
