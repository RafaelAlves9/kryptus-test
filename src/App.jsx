import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Index';
import { Films } from './pages/Films/Index';
import { NoAcess } from './pages/NoAcess/Index';
import { AuthProvider } from './services/Context';
import { useAuth } from './services/useContext';

//condição de acesso pelo login
const Private = ({Item}) => {
  const {signed} = useAuth();
  return signed ? <Item /> : <NoAcess />
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path='/' exact element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/filmes' element={<Private Item={Films}/>}/>
          <Route path='*' element={<NoAcess />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
