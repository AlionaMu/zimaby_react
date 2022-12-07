import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {

  return (

    <BrowserRouter>
        <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/posts' element={<Posts />}>
        </Route>
        <Route path='*' element={<Posts />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
