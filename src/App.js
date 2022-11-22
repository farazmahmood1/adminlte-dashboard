import './App.css';
import Footer from './components/Body/Footer';
import Navbar from './components/Body/Navbar';
import Sidebar from './components/Body/Sidebar';
import Main from './components/Main';
import Error from './components/Body/Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'AsyncStorage';
import Demo from './components/Demo';
import Login from './components/Auth/Login';
import ViewProgress from './components/ViewProgress';
import RightSideBar from './components/Body/RightSideBar';

function App() {

  const [login, SetLogin] = useState(true);

  const SetLocalLogin = async () => {
    try {
      let userLogin = await AsyncStorage.getItem('logIN');
      let parsed = JSON.parse(userLogin);
      if (parsed !== null) {
        SetLogin(parsed);
      }
    }
    catch {
      return null;
    }
  }

  useEffect(() => {
    SetLocalLogin()
  }, [])



  return (
    <div className='wrapper' >
      {
        login === false ?

          <Router>
            <Routes>
              < Route path='/' exact element={<Login />} />
              {/* < Route path='/Register' element={<Register />} /> */}
              < Route path='*' element={<Error />} />

            </Routes>
          </Router>

          :

          <Router>
            <Navbar />
            <Sidebar />
            <RightSideBar />
            <Routes>
              < Route path='/' element={<Main />} />
              < Route path='/Demo' element={<Demo />} />
              < Route path='/ViewProgress' element={<ViewProgress />} />

              < Route path='*' element={<Error />} />
            </Routes>
            <Footer />

          </Router>

      }
    </div>
  );
}

export default App;
