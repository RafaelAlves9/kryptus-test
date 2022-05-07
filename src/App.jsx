import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Index';
import { Films } from './pages/Films/Index';
import { NoAcess } from './pages/NoAcess/Index';
import { AuthProvider } from './services/Context';

//condição de acesso pelo login
const Private = ({Item}) => {
  const login = localStorage.getItem("user", "loged")
  return login ? <Item /> : <NoAcess />
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/filmes' element={<Private Item={Films}/>}/>
          <Route path='*' element={<NoAcess />}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
