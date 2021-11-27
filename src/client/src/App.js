import './App.css';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import {Route, Routes} from "react-router-dom";
import LoginForm from './components/Login';
import RegisterForm from './components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<EventList />} />
        <Route exact path="/add" element={<EventForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;