import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Index';
import { Films } from './pages/Films/Index';
import { AuthProvider } from './Services/Context/Auth';
import { useAuth } from './Services/HookContext/useAuth';

//condição de acesso pelo login
const Private = ({Item}) => {
  const {signed} = useAuth();
  
  return signed ? <Item /> : <Login />
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Fragment>
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/filmes' element={<Private Item={Films}/>}/>
            </Routes>
        </Fragment>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
