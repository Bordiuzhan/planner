import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';
import Layout from './pages/Layout';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<CreateEvent />}></Route>
          <Route path="/event/:eventId" element={<Event />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
