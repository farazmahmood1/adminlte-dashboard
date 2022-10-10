import './App.css';
import Footer from './components/Body/Footer';
import Navbar from './components/Body/Navbar';
import Sidebar from './components/Body/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className='wrapper' >
      <Navbar />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
