import './App.css';

import { UserAuthContextProvider } from './context/UserAuthContextProvider';
import { Route, Routes } from 'react-router';
import GuestMiddleware from './middleware/GuestMiddleware';


import AuthMiddleware from './middleware/AuthMiddleware';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {



  return (

    <UserAuthContextProvider>
    <Routes>
      <Route path="/" element={<GuestMiddleware><Login/> </GuestMiddleware> }/>
      <Route path="/register" element={<GuestMiddleware><Register/> </GuestMiddleware>}/>
      <Route path="/home" element={<AuthMiddleware> <Home/> </AuthMiddleware>} />

    </Routes>
    </UserAuthContextProvider>
    // <div className="App">
    //   <div>
    //     nombre de clients : {clients && clients.length} <br />
    //     nombre de pdv : {salePoints && salePoints.length} <br />
    //     nombre d'agent : {agents && agents.length} <br />
    //     nombre de transaction du jour : {transactions && transactions.length} <br />
    //     nombre d'inscrits par semaine : {registeredInTheWeek && registeredInTheWeek.length} <br />
    //   </div>
    // </div>
  );
}

export default App;
