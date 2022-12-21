import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
