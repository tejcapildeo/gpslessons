
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import CrashCoursePage from './pages/CrashCoursePage';
import About from './pages/About';
import Contact from './pages/Contact';
import MeetTeam from './pages/MeetTeam';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        
          <Routes>

            <Route  path="/" element={<HomePage />}  />
            <Route  path="/about" element={<About />}  />
            <Route  path="/crashcourse" element={<CrashCoursePage />}  />
            <Route  path="/contact" element={<Contact />}  />
            <Route  path="/team" element={<MeetTeam />}  />



          </Routes>

        
        
      </main>
    </div>
  );
}

export default App;
