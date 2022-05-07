import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Index';
import { Films } from './pages/Films/Index';
import { NoAcess } from './pages/NoAcess/Index';
import { AuthProvider } from './services/Context';

//condição de acesso pelo login
const Private = ({Item, Item2}) => {
  const login = localStorage.getItem("user", "loged")
  return login ? <Item /> : <Item2 />
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path='/' exact element={<Private Item={Films} Item2={Login}/>}/>
          <Route path='/login'  element={<Private Item={Films} Item2={Login}/>}/>
          <Route path='/filmes' element={<Private Item={Films} Item2={NoAcess}/>}/>
          <Route path='*' element={<NoAcess />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
