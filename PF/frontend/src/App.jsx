import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home';
import Studios from './pages/studios'
import Subscrptions from './pages/subscriptions'
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='studios' element={<Studios />} />
          <Route path='subscriptions' element={<Subscrptions />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
