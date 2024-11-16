
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add more components here as you build them */}
      <main>
        {/* <section id="about">About Us Section</section>
        <section id="events">Events Section</section>
        <section id="team">Meet the Team Section</section>
        <section id="links">Links Section</section> */}
        <HomePage />
      </main>
    </div>
  );
}

export default App;
