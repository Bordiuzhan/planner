import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import Event from "./pages/Event";

function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<CreateEvent/>}></Route>
      <Route path="/event" element={<Event/>}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
    </div>
  );
}

export default App;
