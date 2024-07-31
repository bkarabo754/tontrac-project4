import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
