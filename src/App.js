import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <h1>This is my first react app</h1>
        <Footer />
    </div>
  );
}

export default App;
