import './App.css';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/add" element={<EventForm />} />
      </Routes>
    </div>
  );
}

export default App;