
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import InchargeStudents from "./pages/InchargeStudents";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/incharge/:event" element={<InchargeStudents />} />
      </Routes>
    </>
  );
}

export default App;